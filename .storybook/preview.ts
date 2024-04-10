import "@/styles/calendar.css";
// import "@/styles/globals.css";
import type { Preview } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import theme from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    chakra: {
      theme
    },
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    nextRouter: {
      Provider: RouterContext.Provider,
      path: "/",
      asPath: "/",
      query: {},
      push() {}
    }
  }
};

export default preview;
