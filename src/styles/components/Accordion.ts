import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { colors } from '../foundations';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    boxShadow: `0px 1px 5px 0px ${colors.blue_second_4}`,
    gap: '16px',
    p: '16px',
    border: 'none',
    mb: '16px',
    borderRadius: '16px',
  },
  icon: {
    color: 'gray',
    mr: '16px',
  },
  button: {
    direction: 'rtl',
    ':hover': {
      bg: 'transparent',
    },
    color: 'dark',
  },
});

export const Accordion = defineMultiStyleConfig({ baseStyle });
