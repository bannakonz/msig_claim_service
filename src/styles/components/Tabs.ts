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
    borderLeftColor: 'bg',
    padding: '8px 20px',
    overflow: 'white',
    fontSize: '15px !important',
    fontWeight: 500,
    lineHeight: '22.5px',
    _selected: {
      color: 'white',
      bg: 'ci_blue',
    },
  },
  tablist: {
    borderWidth: '1px',
    borderRadius: '2rem',
    borderColor: 'bg',
    width: 'fit-content',
    overflow: 'hidden',
  },
  tabpanel: {},
});

export const Tabs = defineMultiStyleConfig({
  baseStyle,
  defaultProps,
});
