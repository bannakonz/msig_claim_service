import { Radio } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Base/Radio',
  component: Radio,
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const _Radio: Story = {
  render: (args) => <Radio {...args} />,
};

_Radio.args = {};
