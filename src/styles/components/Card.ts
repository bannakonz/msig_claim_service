import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { colors } from '../foundations';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: 'white',
    boxShadow: `0px 1px 5px 0px ${colors.blue_second_4}`,
  },
  body: {
    p: '24px',
  },
  footer: {
    pt: 0,
    pb: '24px',
  },
});

const variants = {
  smallRadius: definePartsStyle({
    container: {
      borderRadius: '8px',
    },
  }),
  mediumRadius: definePartsStyle({
    container: {
      borderRadius: '16px',
    },
  }),
};

export const Card = defineMultiStyleConfig({
  baseStyle,
  variants,
});
