import { Stack, Text } from '@chakra-ui/react';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Typography',
  component: Text,
  argTypes: {},
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = () => {
  return (
    <Stack spacing={0}>
      <Text>(15px) Base Style</Text>
      <br />
      <Text variant="normalMedium">(21px) Normal Medium</Text>
      <Text variant="normalText">(21px) Normal</Text>
      <Text variant="paragraphMedium">(15px) Paragraph Medium</Text>
      <Text variant="paragraph">(15px) Paragraph</Text>
      <Text variant="smallerMedium">(13px) Smaller Medium</Text>
      <Text variant="smaller">(13px) Smaller</Text>
      <Text variant="xsMedium">(11px) Xs Medium</Text>
      <Text variant="xs">(11px) Xs</Text>
      <br />
      <Text variant="extraLarge">(96px) Extra Large</Text>
      <br />
      <Text variant="title">(42px) Title หัวเรื่อง</Text>
      <Text variant="heading1">(32px) heading1</Text>
      <Text variant="heading2">(24px) heading2</Text>
      <Text variant="heading">(21px) heading</Text>
      <Text variant="subTitleMedium">(18px) SubTitle Medium</Text>
      <Text variant="subTitle">(18px) SubTitle</Text>
    </Stack>
  );
};

export const Typography = Template.bind({});
