import { defineStyleConfig } from '@chakra-ui/react';

export const variants = {
  smaller: {
    fontSize: '18px',
    lineHeight: '23.4px',
  },
  smallMediumWight: {
    fontWeight: 'medium',
    fontSize: '18px',
    lineHeight: '23.4px',
  },
  italicMedium: {
    fontWeight: 'medium',
    fontSize: '18px',
    fontStyle: 'italic',
    lineHeight: '23.4px',
  },
  mediumParagraph: {
    fontWeight: 'medium',
    fontSize: '21px',
    lineHeight: '27.3px',
  },
  mediumParagraphUnderline: {
    textDecoration: 'underline',
    lineHeight: '20px',
  },

  paragraphText: {
    lineHeight: '27.3px',
  },
  paragraph: {
    lineHeight: '31.5px',
  },

  title: {
    fontWeight: 'medium',
    fontSize: '48px',
    lineHeight: '57.6px',
    color: 'ci_blue',
  },

  title2: {
    fontWeight: 'medium',
    fontSize: '42px',
    lineHeight: '48px',
    color: 'ci_blue',
  },

  heading: {
    fontWeight: 'medium',
    fontSize: '36px',
  },
  heading2: {
    fontWeight: 'medium',
    fontSize: '32px',
    lineHeight: '39px',
  },
  heading3: {
    fontWeight: 'medium',
    fontSize: '24px',
    lineHeight: '29.1px',
  },

  subHeadMedium: {
    fontWeight: 'medium',
    fontSize: '24px',
    lineHeight: '28.8px',
  },
  subHeadingText: {
    fontSize: '24px',
    lineHeight: '28.8px',
  },

  titleSubDetail: {
    fontSize: '24px',
    lineHeight: '32.4px',
  },

  extraLarge: {
    fontWeight: 'medium',
    fontSize: '72px',
  },
  textLarge1: {
    fontWeight: 'medium',
    fontSize: '64px',
  },
  textLarge2: {
    fontSize: '40px',
  },

  largeMedium: {
    fontWeight: 'medium',
    fontSize: '40px',
    color: 'txt_blk_1',
  },
};

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    fontSize: '21px',
  },
  variants,
});
