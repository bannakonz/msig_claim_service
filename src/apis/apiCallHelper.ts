import logHandler from '@/logger/logHandler';
import { AxiosInstance } from 'axios';
import { msigClient } from './clients';

export const apiCall = async <T>({
  instance,
  url,
  method,
  payload,
  headers,
}: {
  instance: AxiosInstance;
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  payload?: any;
  headers?: any;
}) => {
  try {
    const outboundHeaders = {
      headers: {
        'x-correlation-id': crypto.randomUUID(),
        ...headers,
      },
    };

    logHandler.call({
      consumer: 'client',
      path: url,
      body: {
        payload,
        ...outboundHeaders,
      },
    });

    const { data } = await instance<T>({
      url,
      method,
      data: payload,
      ...outboundHeaders,
    });
    return data;
  } catch (error) {
    logHandler.error({
      consumer: 'client',
      path: url,
      body: error,
    });
    return {
      data: undefined,
      errorMessage: error,
      displayErrorMessage: '',
    };
  }
};

export const get = <T>({ url, headers = {} }: { url: string; headers?: any }) =>
  apiCall<T>({ instance: msigClient, method: 'get', url, headers });
export const post = <T>({ url, payload }: { url: string; payload?: any }) =>
  apiCall<T>({ instance: msigClient, method: 'post', url, payload });
