import logHandler from '@/logger/logHandler';
import featureFlags from '@/utils/featureFlags';
import { getLocale } from '@/utils/locales';
import { pickPropertiesByKeys } from '@/utils/object';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { randomUUID } from 'crypto';
import { GetServerSidePropsContext, NextApiRequest } from 'next';
import { mocks } from '../__mocks__/index.mock';
var cache = require('memory-cache');

export type TRequestHelperContext<Payload = {}> = NextApiRequest | (GetServerSidePropsContext & { body?: Payload });

const isServerSidePropsContext = (ctx: NextApiRequest | GetServerSidePropsContext) =>
  (<GetServerSidePropsContext>ctx).req !== undefined;

export const requestHelper = (instance: AxiosInstance) => (ctx: TRequestHelperContext) => {
  const req = isServerSidePropsContext(ctx)
    ? { ...(<GetServerSidePropsContext>ctx), ...(<GetServerSidePropsContext>ctx).req, body: ctx.body }
    : ctx;

  const locale = getLocale({ req });

  const headers = pickPropertiesByKeys(
    ['Content-Type', 'Authorization', 'x-correlation-id', 'x-request-id', 'language'],
    {
      ...(req as any)?.headers,
    }
  );

  const _config: AxiosRequestConfig<any> = {
    headers: {
      ...headers,
      language: (req as any)?.headers?.['language'] || locale.toLocaleUpperCase(),
      'x-correlation-id': (req as any)?.headers?.['x-correlation-id'] || randomUUID(),
    },
    params: req.query,
  };

  return {
    get<T>(url: string) {
      if (featureFlags.isMockEnabled) {
        return mockData(url) as { data: T };
      }

      logHandler.call({
        consumer: 'server',
        path: url,
        body: { ...req, headers: _config.headers },
      });

      return instance.get<T>(url, _config);
    },
    post<T>(url: string, config?: AxiosRequestConfig<any>) {
      if (featureFlags.isMockEnabled) {
        return mockData(url) as { data: T };
      }

      logHandler.call({
        consumer: 'server',
        path: url,
        body: { ...req, headers: _config.headers },
      });

      return instance.post<T>(url, req.body, { ..._config, ...config });
    },
    postCache<T>(url: string, cacheKey: string, config?: AxiosRequestConfig<any>, ttl?: number) {
      const cacheData = cache.get(cacheKey);

      if (cacheData === null) {
        if (featureFlags.isMockEnabled) {
          return mockData(url) as { data: T };
        }

        logHandler.call({
          consumer: 'server',
          path: url,
          body: { ...req, headers: _config.headers },
        });

        const data = instance.post<T>(url, req.body, { ..._config, ...config }).then((result) => {
          cache.put(cacheKey, result, ttl ? ttl : 5 * 60 * 1000);
          return result;
        });
        return data;
      } else {
        return cacheData as { data: T };
      }
    },
  };
};

const mockData = (url: string) => {
  console.warn('You are mocking an API calls');

  const _url = url.slice(1) as keyof typeof mocks;
  let data = mocks[_url];

  if (!data) {
    return {
      data: {
        responseCode: 200,
        errorMessage: '',
        data: 'you do not have mock data',
      },
    };
  }
  return { data };
};
