import { Text } from '@chakra-ui/react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Components/common/checkbox/Checkbox',
  component: Checkbox,
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryFn<typeof Checkbox>;

const Template: Story = (args) => (
  <Checkbox {...args}>
    <Text variant={'paragraph'}>ข้าพเจ้ายอมรับตามข้อตกลง และเงื่อนไขการใช้บริการ ข้อตกลงและเงื่อนไขการใช้งาน</Text>
  </Checkbox>
);

export const _Checkbox = Template.bind({});
_Checkbox.args = {
  isDisabled: false,
  isInvalid: false,
  variant: '',
};

export const CheckboxWithCard = Template.bind({});
CheckboxWithCard.args = {
  variant: 'with-card',
  isDisabled: false,
  isInvalid: false,
};
