type AppEnv = "base" | "development" | "sit" | "uat" | "production" | "test";
const appEnv = (process.env.NEXT_PUBLIC_APPLICATION_ENV ||
  "development") as AppEnv;

const configs = {
  base: {
    isMockEnabled: process.env.NEXT_PUBLIC_API_MOCK === "true",
    isEncrypt: false,
  },
  development: {
    isMockEnabled: false,
    isEncrypt: true,
  },
  sit: {
    isMockEnabled: false,
    isEncrypt: true,
  },
  uat: {
    isMockEnabled: false,
    isEncrypt: true,
  },
  production: {
    isMockEnabled: false,
    isEncrypt: true,
  },
  test: {},
};

export default Object.assign(configs.base, configs[appEnv]);
