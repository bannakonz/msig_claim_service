const isDev = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_APPLICATION_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  ...(!isDev && {
    compiler: {
      removeConsole: {
        exclude: ['error'],
      },
    },
  }),
};

export default nextConfig;
