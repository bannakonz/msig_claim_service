import { Text } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import InputDateSpectrum from "./InputDateSpectrum";

const meta = {
  title: "Components/commons/calendar/InputDateSpectrum",
  component: InputDateSpectrum,
  argTypes: {},
} satisfies Meta<typeof InputDateSpectrum>;

export default meta;
type Story = StoryObj<typeof InputDateSpectrum>;

export const _InputDateSpectrum: Story = {
  render: (args) => {
    const { control, watch } = useForm({
      defaultValues: {
        [args.inputField.name]: "",
      },
    });
    return (
      <>
        <NextIntlClientProvider messages={{}} locale="th">
          <Controller
            name={args.inputField.name}
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputDateSpectrum
                {...args}
                dateValues={value}
                onChangeDateValues={(date) => onChange(date)}
              />
            )}
          />
          <Text>
            <b>Actual Value:</b> {watch(args.inputField.name)}
          </Text>
        </NextIntlClientProvider>
      </>
    );
  },
};

_InputDateSpectrum.args = {
  inputField: { name: "inputDatePicker" },
  locale: "th",
  calendar: {},
};
