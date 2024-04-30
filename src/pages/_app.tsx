import Layout from '@/components/layout/Layout';
import Fonts from '@/styles/Fonts';
import '@/styles/calendar.css';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={{}} locale="th">
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </NextIntlClientProvider>
  );
}
