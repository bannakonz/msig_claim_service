import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { colors } from '../foundations';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    marginInlineStart: '16px',
  },
  control: {
    boxSize: 18,
    mt: '2px',
    borderColor: 'blue_second_4',
    position: 'relative',
    _checked: {
      bg: 'ci_blue',
      borderColor: 'ci_blue',
      _hover: {
        bg: 'ci_blue',
        borderColor: 'ci_blue',
      },
      _invalid: {
        _hover: {
          bg: 'red_second_1',
        },
        bg: 'red_second_1',
        borderColor: 'red_second_1',
      },
    },
    _disabled: {
      opacity: 0.6,
    },
    _invalid: {
      _hover: {
        borderColor: 'red_second_1',
      },
      borderColor: 'red_second_1',
    },
  },

  container: {
    alignItems: 'start',
  },
});

export const variants = {
  'with-card': definePartsStyle({
    container: {
      w: '100%',
      borderRadius: '8px',
      boxShadow: `0px 1px 5px 0px ${colors.blue_second_4}`,
      p: '16px',
    },
    label: {
      w: '100%',
    },
  }),
};

export const Checkbox = defineMultiStyleConfig({ baseStyle, variants });
