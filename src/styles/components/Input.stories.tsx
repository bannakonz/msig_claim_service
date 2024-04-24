import { Input } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Base/Input',
  component: Input,
  render: (args) => <Input {...args} />,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const InputField: Story = {
  args: {
    size: 'md',
    placeholder: 'Name',
    disabled: false,
  },
};
