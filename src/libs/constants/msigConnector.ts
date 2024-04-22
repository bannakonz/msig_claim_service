import config from '@/config';
import logHandler from '@/logger/logHandler';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const handleError = (error: any) => {
  const response = {
    url: error?.config.url,
    body: error?.config.data,
    data: error?.response?.data,
    status: error?.response?.status,
    code: error?.code,
    message: error?.message,
  };

  logHandler.error({ consumer: 'server', path: response.url, body: { ...response, headers: error?.config.headers } });

  throw { response };
};

const handleResponse = (response: AxiosResponse<any, any>) => {
  const start = response.config.headers['x-request-startTime'];

  const end = process.hrtime(start);
  const milliseconds = Math.round(end[0] * 1000 + end[1] / 1000000);
  response.headers['x-request-duration'] = milliseconds;

  logHandler.success({ consumer: 'server', path: response.config.url || '', body: response });
  return response;
};

const interceptRequest = (config: InternalAxiosRequestConfig<any>) => {
  config.headers['x-request-startTime'] = process.hrtime();
  return config;
};

const _msigConfig = {
  auth: {
    username: config.msigApi.username,
    password: config.msigApi.password,
  },
  timeout: 20000,
};

const dataClient = axios.create({
  baseURL: config.msigApi.dataUrl,
  ..._msigConfig,
});

dataClient.interceptors.request.use(interceptRequest);
dataClient.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleError(error)
);

const msigClient = axios.create({
  baseURL: config.msigApi.msigUrl,
  ..._msigConfig,
});

msigClient.interceptors.request.use(interceptRequest);
msigClient.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleError(error)
);

export { dataClient, msigClient };
