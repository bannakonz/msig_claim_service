import { Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CardInsurance from './CardInsurance';

const meta = {
  title: 'Components/card/CardInsurance',
  component: CardInsurance,
  argTypes: {},
} satisfies Meta<typeof CardInsurance>;

export default meta;
type Story = StoryObj<typeof CardInsurance>;

export const _CardInsurance: Story = {
  render: (args) => <CardInsurance {...args} />,
};
