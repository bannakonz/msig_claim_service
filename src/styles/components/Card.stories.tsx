import { Card, Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Base/Card',
  component: Card,
  render: (args) => (
    <Card {...args}>
      <Text>View a summary of all your customers over the last month.</Text>
    </Card>
  ),
};

type Story = StoryObj<typeof Card>;

export const CardTemp: Story = {
  argTypes: {
    variant: {
      options: ['smallRadius', 'mediumRadius'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'smallRadius',
  },
};

export default meta;
