import { Text } from "@chakra-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";
import InputDatePicker from "./DatePicker";

export default {
  title: "Components/common/input/InputDatePicker",
  component: InputDatePicker,
  argTypes: {}
} as Meta<typeof InputDatePicker>;

const Template: StoryFn<typeof InputDatePicker> = (args) => {
  const { control, watch } = useForm({
    defaultValues: {
      [args.inputField.name]: []
    }
  });

  return (
    <>
      <Controller
        name={args.inputField.name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputDatePicker
            {...args}
            dateValues={value}
            onChangeDateValues={(date) => onChange(date)}
          />
        )}
      />
      <Text>
        <b>Actual Value:</b> {watch(args.inputField.name).join(" - ")}
      </Text>
    </>
  );
};

export const WithoutRange = Template.bind({});

const addDate = (days: number) => {
  return new Date().setDate(new Date().getDate() + days);
};

WithoutRange.args = {
  buttonLabel: "ยืนยันวันที่เลือก",
  inputField: { name: "inputDatePicker" },
  calendar: {
    defaultValues: new DateObject(),
    minDate: new DateObject(addDate(-3)), // new DateObject().subtract('3', 'days')
    maxDate: new DateObject(addDate(10)) // new DateObject().add('10', 'days')
  }
};

export const WithRange = Template.bind({});

WithRange.args = {
  buttonLabel: "ยืนยันวันที่เลือก",
  showRangeValue: true,
  inputField: { name: "inputDatePicker" },
  calendar: {
    range: true,
    defaultValues: [new DateObject(), new DateObject(addDate(3))],
    minDate: new DateObject(addDate(-3)), // new DateObject().subtract('3', 'days')
    maxDate: new DateObject(addDate(10)) // new DateObject().add('10', 'days')
  }
};
