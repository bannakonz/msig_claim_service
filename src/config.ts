const config = {
  appEnv: process.env.NEXT_PUBLIC_APPLICATION_ENV || 'development',
  publicApi: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
  msigApi: {
    dataUrl: process.env.MSIG_API_DATA_URL || '',
    msigUrl: process.env.MSIG_API_MSIG_URL || '',
    username: process.env.MSIG_API_BASIC_AUTH_USERNAME || '',
    password: process.env.MSIG_API_BASIC_AUTH_PASSWORD || '',
  },
};

export default config;
