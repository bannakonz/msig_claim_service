import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: '1rem',
    borderColor: 'blue_second_4',
    _checked: {
      background: 'ci_blue',
      borderColor: 'ci_blue',
      _hover: {
        bg: 'ci_blue',
      },
    },
  },
});

export const variants = {};

export const Radio = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: 'lg',
  },
});
