import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const defaultProps = {
  variant: 'unstyled',
  size: 'xl',
};

const baseStyle = definePartsStyle({
  root: {},
  tab: {
    _first: { borderLeft: 'none' },
    color: 'gray',
    borderLeft: '1px solid',
    borderLeftColor: 'gray',
    padding: '8px 16px',
    overflow: 'white',
    _selected: {
      color: 'white',
      bg: 'blue',
      fontWeight: 'medium',
    },
  },
  tablist: {
    borderWidth: '1px',
    borderRadius: '2rem',
    borderColor: 'gray',
    fontSize: '24px !important',
    fontWeight: 400,
    width: 'fit-content',
    overflow: 'hidden',
  },
  tabpanel: {},
});

export const Tabs = defineMultiStyleConfig({
  baseStyle,
  defaultProps,
});
