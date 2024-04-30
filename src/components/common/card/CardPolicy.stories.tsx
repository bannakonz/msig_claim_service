import { Image, Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CardPolicy from './CardPolicy';

const meta = {
  title: 'Components/card/CardPolicy',
  component: CardPolicy,
} satisfies Meta<typeof CardPolicy>;

export default meta;
type Story = StoryObj<typeof CardPolicy>;

export const _CardPolicy: Story = {
  args: {
    title: 'ขอรับกรมธรรม์อิเล็กทรอนิกส์ (E-Policy)',
    detail: 'Card sub detail',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    onClickCheck: () => {},
    onClickClaim: () => {},
  },
  render: (args) => <CardPolicy {...args} />,
};
