import { Stack } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
  title: "Components/content/Title",
  component: Title,
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const _Title: Story = {
  render: (args) => (
    <Stack gap={10}>
      <Title
        variant={{ base: "largeMedium", xl: "title" }}
        alignItems={{ base: "center", xl: "start" }}
        titleBorder={{ display: { base: "box", xl: "none" } }}
      >
        คุ้มครอง ครอบคลุม พอดีกับทุกความต้องการ
      </Title>

      <Title variant="title" as="h1">
        ประกันภัยรถยนต์ Safe Guard
      </Title>

      <Title>ประกันภัยรถยนต์</Title>

      <Title
        gap={{ base: 8, xl: 6 }}
        titleBorder={{ w: { base: 7, xl: 10 }, h: { base: "1.5", xl: 2 } }}
      >
        โปรโมชั่น
      </Title>
    </Stack>
  ),
};
