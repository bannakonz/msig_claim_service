import { extendTheme } from "@chakra-ui/react";
import components from "./components";
// import * as foundations from './foundations';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8"
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9"
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f"
      }
    },
    radii: {
      button: "12px"
    }
  },
  fonts: {
    body: "DB Merit X",
    heading: "DB Merit X"
  },

  styles: {
    global: () => ({
      "*,*::before,*::after": {
        boxSizing: "border-box"
      },
      body: {
        width: "100%"
      },
      main: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "white"
      }
    })
  },

  // ...foundations,
  components
});

export default theme;
