import { Input } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
  render: (args) => <Input {...args} />
};
export default meta;

type Story = StoryObj<typeof Input>;

export const InputField: Story = {
  args: {
    size: "md",
    placeholder: "Name",
    disabled: false
  }
};

// export default {
//   title: 'Base/Input',
//   component: Input,
//   argTypes: {},
// } as Meta<typeof Input>;

// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// export const _Input = Template.bind({});

// _Input.args = {
//   size: 'md',
//   placeholder: 'Name',
//   disabled: false,
// };
