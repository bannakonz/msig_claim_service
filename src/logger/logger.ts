import pino from 'pino';

const maskResponseFields = [];
const maskRequestFields = [];

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  browser: {
    write: {
      info: () => {},
    },
  },
  redact: [],
});

export default logger;
