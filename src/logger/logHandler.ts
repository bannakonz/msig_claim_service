import logger from './logger';

type TLog = {
  consumer: 'server' | 'client';
  path: string;
  body: any;
};

const serializeRequest = (request: any) => {
  return {
    payload: { ...request.body, ...request.payload },
    query: request.query,
    headers: request.headers,
  };
};

const serializeResponse = (response: any) => {
  return {
    duration: response.headers?.['x-request-duration'] || 0,
    headers: {
      ...response.headers,
      'x-correlation-id': response.config.headers['x-correlation-id'],
    },
    body: response.data,
  };
};

const call = ({ consumer, path, body = {} }: TLog) => {
  const msg = `[${consumer}][call] ${path}`;

  const logData = {
    request: body ? serializeRequest(body) : {},
  };

  logger.info({ msg, path, body: logData });
};

const success = ({ consumer, path, body = {} }: TLog) => {
  const msg = `[${consumer}][success] ${path}`;

  const logData = {
    response: body ? serializeResponse(body) : {},
  };

  logger.info({ msg, path, body: logData });
};

const error = ({ consumer, path, body = {} }: TLog) => {
  const msg = `[${consumer}][error] ${path}`;
  logger.error({ msg, path, body });
};

export default { call, success, error };
