import { Global } from '@emotion/react';
import React from 'react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 100;
      src: url('/assets/font/Prompt/Prompt-Thin.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 100;
      src: url('/assets/font/Prompt/Prompt-ThinItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 200;
      src: url('/assets/font/Prompt/Prompt-ExtraLight.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 200;
      src: url('/assets/font/Prompt/Prompt-ExtraLightItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 300;
      src: url('/assets/font/Prompt/Prompt-Light.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 300;
      src: url('/assets/font/Prompt/Prompt-LightItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 400;
      src: url('/assets/font/Prompt/Prompt-Regular.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 400;
      src: url('/assets/font/Prompt/Prompt-Italic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 500;
      src: url('/assets/font/Prompt/Prompt-Medium.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 500;
      src: url('/assets/font/Prompt/Prompt-MediumItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 600;
      src: url('/assets/font/Prompt/Prompt-SemiBold.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 600;
      src: url('/assets/font/Prompt/Prompt-SemiBoldItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 700;
      src: url('/assets/font/Prompt/Prompt-Bold.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 700;
      src: url('/assets/font/Prompt/Prompt-BoldItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 800;
      src: url('/assets/font/Prompt/Prompt-ExtraBold.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 800;
      src: url('/assets/font/Prompt/Prompt-ExtraBoldItalic.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: normal;
      font-weight: 900;
      src: url('/assets/font/Prompt/Prompt-Black.ttf');
    }
    @font-face {
      font-family: 'Prompt';
      font-style: italic;
      font-weight: 900;
      src: url('/assets/font/Prompt/Prompt-BlackItalic.ttf');
    }
      `}
  />
);

export default Fonts;
