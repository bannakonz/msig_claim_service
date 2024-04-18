import "@/styles/calendar.css";
import '@/styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import React from "react";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={{}} locale="th">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlClientProvider>
  );
}
