import { Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputTimePicker } from '.';

const meta = {
  title: 'Components/common/input/InputTimePicker',
  component: InputTimePicker,
  argTypes: {},
} satisfies Meta<typeof InputTimePicker>;

export default meta;
type Story = StoryObj<typeof InputTimePicker>;

export const _InputTimePicker: Story = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const onChangeTimeValue = (value: string) => {
    setSelectedTime(value);
  };

  return (
    <>
      <InputTimePicker
        inputField={{ name: 'time' }}
        label="เวลานัดหมาย"
        isRequired={true}
        value={selectedTime}
        onChangeTimeValue={onChangeTimeValue}
        errorMessage=""
      />
      <Text>
        <b>Actual Value:</b> {selectedTime}
      </Text>
    </>
  );
};

_InputTimePicker.args = {};
