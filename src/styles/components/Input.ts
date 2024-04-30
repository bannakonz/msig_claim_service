import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { colors } from '../foundations';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: '12px',
    p: '16px',
  },
  element: {
    pr: '16px',
  },
});

const sizes = {
  md: definePartsStyle({
    field: {
      fontSize: '15px',
      lineHeight: '22.5px',
      h: 'auto',
      borderRadius: '12px',
    },
  }),
};

const variants = {
  outline: definePartsStyle({
    field: {
      color: 'gray',
      borderColor: 'bg',
      _placeholder: {
        color: 'gray',
      },
      _readOnly: {
        boxShadow: 'none',
      },
      _disabled: {
        background: `${colors.blue_second_4}` + '50', // Opacity 50%
        borderWidth: '1px',
        opacity: 1,
      },
      _focus: {
        borderColor: 'blue_second_2',
        borderWidth: '1px',
        opacity: 1,
        boxShadow: 'none',
        WebkitTapHighlightColor: 'transparent',
      },
    },
  }),
};

export const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
