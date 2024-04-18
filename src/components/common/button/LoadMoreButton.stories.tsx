import LoadMoreButton from "@/components/common/button/LoadMoreButton";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/common/button/LoadMoreButton",
  component: LoadMoreButton,
  argTypes: {},
} satisfies Meta<typeof LoadMoreButton>;

export default meta;
type Story = StoryObj<typeof LoadMoreButton>;

export const _LoadMoreButton: Story = {
  render: (args) => (
    <LoadMoreButton
      variant="heading3"
      buttonName="โหลดเพิ่มเติม"
      onClick={() => {}}
      isLoading={false}
    />
  ),
};
