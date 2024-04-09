import { Stack, Text } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Typography/Typography",
  component: Text,
  argTypes: {}
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = () => {
  return (
    <Stack spacing={0}>
      <Text>(21px) Base Style</Text>
      <Text variant="smaller">(18px) Smaller</Text>
      <Text variant="smallMediumWight">(18px) Small Medium Wight</Text>
      <Text variant="italicMedium">(18px) Italic Medium</Text>
      <Text variant="mediumParagraph">(21px) Medium Paragraph</Text>
      <Text variant="mediumParagraphUnderline">
        (21px) Medium Paragraph Underline
      </Text>

      <Text variant="paragraphText">(21px) Paragraph Text พารากราฟ</Text>
      <Text variant="paragraph">(21px) Paragraph</Text>

      <Text variant="title">(48px) Title หัวเรื่อง</Text>
      <Text variant="title2">(42px) Title 2 หัวเรื่อง 2</Text>

      <Text variant="heading">(36px) Heading หัวข้อ</Text>
      <Text variant="heading2">(32px) Heading2 หัวข้อ2</Text>
      <Text variant="heading3">(24px) Heading3 หัวข้อ3</Text>

      <Text variant="subHeadMedium">(24px) Sub Head Medium</Text>
      <Text variant="subHeadingText">(24px) Sub Heading Text หัวข้อย่อย</Text>

      <Text variant="titleSubDetail">(24px) Title Sub Detail</Text>

      <Text variant="extraLarge">(72px) Extra Large</Text>

      <Text variant="textLarge1">(64px) Text Large1</Text>
      <Text variant="textLarge2">(40px) Text Large2</Text>

      <Text variant="largeMedium">(40px) Large Medium</Text>
    </Stack>
  );
};

export const Typography = Template.bind({});
