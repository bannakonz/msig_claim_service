import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  baseStyle: {},
  sizes: {
    breakpoints: {
      maxW: {
        base: '100%',
        xs: '440px',
        sm: '620px',
        md: '620px',
        lg: '940px',
        xl: '1200px',
        '2xl': '1280px',
        '3xl': '1600px',
      },
    },
  },
  defaultProps: {
    size: 'breakpoints',
  },
});
