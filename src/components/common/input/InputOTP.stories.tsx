import { Meta, StoryObj } from "@storybook/react";
import { InputOTP } from ".";

const meta = {
  title: "Components/common/input/InputOTP",
  component: InputOTP,
  argTypes: {},
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const _InputOTP: Story = {
  render: (args) => <InputOTP {...args} />,
};

_InputOTP.args = {
  placeholder: " ",
  autoFocus: true,
  type: "number",
  size: "lg",
};
