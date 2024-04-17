import { Text } from "@chakra-ui/react";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";
import "../../../styles/calendar.css";
import InputDatePicker from "./DatePicker";

const meta: Meta<typeof InputDatePicker> = {
  component: InputDatePicker,
  render: (args) => {
    const { control, watch } = useForm({
      defaultValues: {
        [args.inputField.name]: []
      }
    });

    return (
      <NextIntlClientProvider messages={{}} locale="th">
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
      </NextIntlClientProvider>
    );
  }
};

export default meta;
type Story = StoryObj<typeof InputDatePicker>;

const addDate = (days: number) => {
  return new Date().setDate(new Date().getDate() + days);
};

export const WithoutRange: Story = {
  args: {
    buttonLabel: "ยืนยันวันที่เลือก",
    inputField: { name: "inputDatePicker" },
    calendar: {
      defaultValues: new DateObject(),
      minDate: new DateObject(addDate(-3)), // new DateObject().subtract('3', 'days')
      maxDate: new DateObject(addDate(10)) // new DateObject().add('10', 'days')
    }
  }
};

export const WithRange: Story = {
  args: {
    buttonLabel: "ยืนยันวันที่เลือก",
    showRangeValue: true,
    inputField: { name: "inputDatePicker" },
    calendar: {
      range: true,
      defaultValues: [new DateObject(), new DateObject(addDate(3))],
      minDate: new DateObject(addDate(-3)), // new DateObject().subtract('3', 'days')
      maxDate: new DateObject(addDate(10)) // new DateObject().add('10', 'days')
    }
  }
};
