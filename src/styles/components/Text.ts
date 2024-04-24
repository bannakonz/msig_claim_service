import { defineStyleConfig } from '@chakra-ui/react';

export const variants = {
  normalMedium: {
    fontWeight: 'medium',
    fontSize: '21px',
    lineHeight: '31.5px',
  },
  normalText: {
    fontSize: '21px',
    lineHeight: '27.3px',
  },
  paragraphMedium: {
    fontWeight: 'medium',
    fontSize: '15px',
    lineHeight: '22.5px',
  },
  paragraph: {
    fontSize: '15px',
    lineHeight: '22.5px',
  },
  smallerMedium: {
    fontWeight: 'medium',
    fontSize: '13px',
    lineHeight: '16.9px',
  },
  smaller: {
    fontSize: '13px',
    lineHeight: '16.9px',
  },
  xsMedium: {
    fontWeight: 'medium',
    fontSize: '11px',
    lineHeight: '16.9px',
  },
  xs: {
    fontSize: '11px',
    lineHeight: '16.9px',
  },
  extraLarge: {
    fontWeight: 'medium',
    fontSize: '96px',
    lineHeight: '63px',
  },
  title: {
    fontWeight: 'medium',
    fontSize: '42px',
    lineHeight: '63px',
  },

  heading: {
    fontWeight: 'medium',
    fontSize: '21px',
    lineHeight: '31.5px',
  },
  heading1: {
    fontWeight: 'medium',
    fontSize: '32px',
    lineHeight: '48px',
  },
  heading2: {
    fontWeight: 'medium',
    fontSize: '24px',
    lineHeight: '36px',
  },
  subTitleMedium: {
    fontWeight: 'medium',
    fontSize: '18px',
    lineHeight: '27px',
  },
  subTitle: {
    fontSize: '18px',
    lineHeight: '27px',
  },
};

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    fontSize: '15px',
  },
  variants,
});
