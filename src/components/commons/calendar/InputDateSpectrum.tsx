import { Icons } from "@/constants/ICONS";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  PlacementWithLogical,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  ResponsiveValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import SVG from "react-inlinesvg";
import ErrorMessage from "../../input/ErrorMessage";
import Calendar from "./useCalendar/Calendar";

interface IInputField {
  name: string;
  placeholder?: string;
}

interface IInputDateSpectrum {
  inputField: IInputField;
  locale: string;
  calendar?: {
    defaultValues?: string;
  };
  errorMessage?: string;
  showRangeValue?: boolean;
  buttonLabel: string;
  dateValues?: string;
  onChangeDateValues: (_dateValues: string) => void;
  placement?: PlacementWithLogical;
  isDisabled?: boolean;
  isClearMaxDate?: boolean; // [MSIG-1236] true = enable maxdate
  variant?: ResponsiveValue<string & {}>;
}

const InputDateSpectrum = ({
  inputField,
  locale,
  // calendar,
  showRangeValue = false,
  buttonLabel,
  errorMessage,

  dateValues,

  onChangeDateValues,

  placement = "bottom",
  isDisabled,
  isClearMaxDate = false, // [MSIG-1236] true = enable maxdate
  variant,
}: IInputDateSpectrum) => {
  const initPopoverRef = useRef(null);
  const {
    onOpen: onOpenCalendar,
    onClose: onCloseCalendar,
    isOpen: isOpenCalendar,
  } = useDisclosure();

  const [overIconClose, setOverIconClose] = useState(false);

  const onSubmitCalender = (dateValues: string) => {
    onChangeDateValues(dateValues);
    onCloseCalendar();
  };

  const onClear = () => {
    onChangeDateValues("");

    // focus calendar
    const docId = `popover-content-calendar-popover-${inputField.name}`;
    document.getElementById(docId)?.focus();
  };

  return (
    <Box>
      <Popover
        id={`calendar-popover-${inputField.name}`}
        onOpen={() => {
          if (!isDisabled) {
            onOpenCalendar();
          }
        }}
        onClose={() => {
          if (!overIconClose) {
            onCloseCalendar();
          }
        }}
        isOpen={isOpenCalendar}
        closeOnBlur
        placement={placement}
        initialFocusRef={initPopoverRef}
        isLazy
        variant={variant}
      >
        <PopoverTrigger>
          <div>
            <InputField
              {...inputField}
              isOpenCalendar={isOpenCalendar}
              dateValues={dateValues}
              onClear={onClear}
              setOverIconClose={setOverIconClose}
              errorMessage={errorMessage}
              isDisabled={isDisabled}
            />
          </div>
        </PopoverTrigger>
        <ErrorMessage>{errorMessage}</ErrorMessage>

        {isOpenCalendar && (
          <CalendarContent
            locale={locale}
            dateValues={dateValues}
            onSubmitCalender={onSubmitCalender}
          />
        )}
      </Popover>
    </Box>
  );
};

const getDefaultCalenderValue = (
  defaultValues?: string,
  dateValues?: string
) => {
  if (!dateValues) {
    if (defaultValues?.toString()) {
      return parseDate(convertDateToISOString(defaultValues));
    }

    return undefined;
  }

  return parseDate(convertDateToISOString(dateValues));
};

// /** format 15/02/2024 to 2024-02-15 */
export const convertDateToISOString = (dateString: string) => {
  if (!dateString) {
    return "";
  }

  const [day, month, year] = dateString.split("/");
  const dateObject = `${year}-${month}-${day}`;

  return dateObject;
};

const CalendarContent = (props: {
  locale: string;
  defaultValues?: string;
  dateValues?: string;
  onSubmitCalender: (_dateValues: string) => void;
}) => {
  const { defaultValues, dateValues, onSubmitCalender, locale, ...rest } =
    props;

  // const [maxDate, setMaxDate] = useState<TMaxDate>(rest.maxDate);
  const [errorMessage, setErrorMessage] = useState("");
  const [calendarValues, setCalendarValues] = useState<
    CalendarDate | undefined
  >(getDefaultCalenderValue(defaultValues, dateValues));

  const onHandleSubmit = (submitValues?: any) => {
    if (!calendarValues && !submitValues) {
      return;
    }
    const day = submitValues.day;
    const month = submitValues.month;
    const year = submitValues.year;

    const pad = (num: number) => {
      return num < 10 ? "0" + num : num;
    };

    const formattedDate = pad(day) + "/" + pad(month) + "/" + year;
    onSubmitCalender(formattedDate);
  };

  return (
    <PopoverContent
      width="auto"
      shadow="none"
      borderRadius="16px"
      border="1px solid"
      borderColor="gray"
      boxShadow="0px 4px 32px rgba(27, 21, 100, 0.1)"
      overflow="hidden"
      p={0}
    >
      <PopoverBody p={2}>
        <Calendar
          value={calendarValues}
          onChange={onHandleSubmit}
          locale={locale}
        />
      </PopoverBody>
    </PopoverContent>
  );
};

const InputField = ({
  name,
  placeholder = "Select Date",
  errorMessage,
  isOpenCalendar,
  dateValues,
  onClear,
  setOverIconClose,
  isDisabled,
}: IInputField & {
  errorMessage?: string;
  isOpenCalendar: boolean;
  dateValues?: string;
  onClear: () => void;
  setOverIconClose: (_value: boolean) => void;
  isDisabled?: boolean;
}) => {
  const _locale = useLocale();

  return (
    <InputGroup>
      <Input
        name={name}
        type="text"
        value={dateValues}
        placeholder={placeholder}
        isInvalid={!!errorMessage}
        autoComplete="off"
        readOnly
        isDisabled={isDisabled}
        errorBorderColor="ci_red"
      />
      {/* <InputRightElement height="100%" cursor="pointer">
        {isOpenCalendar ? (
          <SVG
            onMouseOver={() => {
              setOverIconClose(true);
            }}
            onMouseLeave={() => {
              setOverIconClose(false);
            }}
            src={Icons.riCloseFill}
            onClick={onClear}
          />
        ) : (
          <SVG src={Icons.calendar} />
        )}
      </InputRightElement> */}
    </InputGroup>
  );
};

export default InputDateSpectrum;
