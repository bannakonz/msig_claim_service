import { CalendarIcon, CloseIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  PlacementWithLogical,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  ResponsiveValue,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import type { Calendar as CalendarType } from "react-date-object";
import {
  Calendar,
  CalendarProps,
  Value as CalendarValue,
  DateObject,
} from "react-multi-date-picker";

import React from "react";
import { locale_en, locale_th, thai } from "../../../constants/calendar";
import ErrorMessage from "../input/ErrorMessage";
// import { Icons } from "@/constants/ICONS";

const thai_th = thai as CalendarType;

interface IInputField {
  name: string;
  placeholder?: string;
}

interface IInputDatePicker {
  inputField: IInputField;
  calendar?: CalendarProps & {
    defaultValues?: DateObject | DateObject[];
    rangeAutoSelectEndDate?: boolean;
  };
  errorMessage?: string;
  showRangeValue?: boolean;
  buttonLabel: string;

  dateValues?: string[];

  onChangeDateValues: (_dateValues: string[]) => void;

  placement?: PlacementWithLogical;
  isDisabled?: boolean;
  isClearMaxDate?: boolean; // [MSIG-1236] true = enable maxdate
  variant?: ResponsiveValue<string & {}>;
}

const InputDatePicker = ({
  inputField,
  calendar,
  showRangeValue = false,
  buttonLabel,
  errorMessage,

  dateValues = [],

  onChangeDateValues,

  placement = "bottom",
  isDisabled,
  isClearMaxDate = false, // [MSIG-1236] true = enable maxdate
  variant,
}: IInputDatePicker) => {
  const initPopoverRef = useRef(null);
  const {
    onOpen: onOpenCalendar,
    onClose: onCloseCalendar,
    isOpen: isOpenCalendar,
  } = useDisclosure();

  const [overIconClose, setOverIconClose] = useState(false);

  const onSubmitCalender = (dateValues: string[]) => {
    onChangeDateValues(dateValues);
    onCloseCalendar();
  };

  const onClear = () => {
    onChangeDateValues([]);

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
        {showRangeValue && (
          <RangeValueLabel label="จำนวนวันเดินทาง" dateValues={dateValues} />
        )}
        <ErrorMessage>{errorMessage}</ErrorMessage>
        {isOpenCalendar && (
          <CalendarContent
            {...calendar}
            dateValues={dateValues}
            buttonLabel={buttonLabel}
            onSubmitCalender={onSubmitCalender}
            isClearMaxDate={isClearMaxDate}
          />
        )}
      </Popover>
    </Box>
  );
};

const getDefaultCalenderValue = (
  defaultValues?: DateObject | DateObject[],
  dateValues?: string[]
) => {
  if (!dateValues || !dateValues?.[0]) {
    if (defaultValues?.toString()) {
      return defaultValues;
    }

    return null;
  }

  const startDateObject = new DateObject(dateValues[0]);

  if (!dateValues?.[1]) {
    return startDateObject;
  }

  const endDateObject = new DateObject(dateValues[1]);

  return [startDateObject, endDateObject];
};

const DATE_FORMAT = "YYYY-MM-DDThh:mm:ss";

/** format DateObject to YYYY/MM/DDThh:mm:ss AD */
export const formatDateObjectToString = (value: DateObject, locale: string) => {
  // MSIG-1270 เลือกวันที่ 29 กพ ไม่ได้
  const day = value.day;
  const month = value.month;
  const year = locale === "th" ? value.year - 543 : value.year;

  const _value = new DateObject(`${year}-${month}-${day}`);

  // MSIG-1270 เลือกวันที่ 29 กพ ไม่ได้
  // if (locale === 'th') {
  //   return _value.subtract(543, 'years').format(DATE_FORMAT);
  // }

  return _value.format(DATE_FORMAT);
};

/** format Date to DD/MM/YYYY */
export const formatSlashDayMonthYear = (value?: string) => {
  if (!value) {
    return "";
  }

  const _value = new DateObject(value);
  return _value.format(DATE_DISPLAY_FORMAT);
};

export const convertDateToISOString = (dateString: string, locale?: string) => {
  if (!dateString) {
    return "";
  }

  const [day, month, year] = dateString.split("/");

  if (day && month && year) {
    let _year = Number(year);
    if (locale === "th") {
      _year = _year - 543;
    }

    return `${_year}-${month}-${day}T12:00:00`;
  }
  return "";
};

type TMaxDate = string | number | Date | DateObject | undefined;

const CalendarContent = (
  props: CalendarProps & {
    defaultValues?: DateObject | DateObject[];
    dateValues?: string[];
    buttonLabel: string;
    onSubmitCalender: (_dateValues: string[]) => void;
    rangeAutoSelectEndDate?: boolean;
    isClearMaxDate?: boolean;
  }
) => {
  const {
    range,
    rangeAutoSelectEndDate,
    defaultValues,
    dateValues,
    buttonLabel,
    onSubmitCalender,
    isClearMaxDate,
    ...rest
  } = props;
  const _locale = "th";
  //   const t = useTranslations("ta.searchPlan");
  const [maxDate, setMaxDate] = useState<TMaxDate>(rest.maxDate);
  const [calendarValues, setCalendarValues] = useState<CalendarValue>(
    getDefaultCalenderValue(defaultValues, dateValues)
  );
  const [errorMessage, setErrorMessage] = useState("");

  const onHandleSubmit = (submitValues?: DateObject | DateObject[]) => {
    if (!calendarValues && !submitValues) {
      return;
    }

    const formatted: string[] = [];

    if (Array.isArray(submitValues)) {
      // MSIG-563
      let autoEndDate = new DateObject(submitValues[0] || submitValues[1]);
      autoEndDate.add("1", "years");
      autoEndDate.subtract("1", "days");
      formatted.push(
        formatDateObjectToString(submitValues[0] as DateObject, _locale)
      );
      formatted.push(
        formatDateObjectToString(autoEndDate as DateObject, _locale)
      );
    } else if (Array.isArray(calendarValues)) {
      // [MSIG-1236] ถ้าเลือก start date เกินให้ขึ้นแจ้งเตือน
      if (isClearMaxDate && calendarValues[0] > (rest.maxDate as DateObject)) {
        // setErrorMessage(t("errorMsgSelectDate"));
        return;
      }

      formatted.push(
        formatDateObjectToString(calendarValues[0] as DateObject, _locale)
      );
      formatted.push(
        formatDateObjectToString(
          (calendarValues[1] || calendarValues[0]) as DateObject,
          _locale
        )
      );
    } else {
      formatted.push(
        formatDateObjectToString(submitValues as DateObject, _locale)
      );
    }

    onSubmitCalender(formatted);
  };
  // MSIG-1236 enable maxDate
  useEffect(() => {
    if (isClearMaxDate && Array.isArray(dateValues) && dateValues.length > 0) {
      setMaxDate(undefined);
    }
  }, [dateValues, isClearMaxDate]);

  return (
    <>
      <Portal>
        <PopoverContent
          shadow="none"
          borderRadius="16px"
          border="1px solid"
          borderColor="gray"
          boxShadow="0px 4px 32px rgba(27, 21, 100, 0.1)"
        >
          {/* MSIG-864 แสดง label เหมือนกันทั้งในประเทศ ต่างประเทศ */}
          {range && (
            <CalendarHeader
              title="เลือกวันเดินทาง"
              calendarValues={calendarValues as DateObject[]}
            />
          )}

          <PopoverBody
            display="flex"
            height="100%"
            minH="410px"
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            px={0}
            py={4}
          >
            <Calendar
              format="DD/MM/YYYY"
              calendar={_locale === "th" ? thai_th : undefined}
              hideWeekDays={false}
              value={calendarValues}
              onChange={(selectedDates: DateObject | DateObject[]) => {
                // [MSIG-1236] true = enable maxdate
                if (isClearMaxDate && selectedDates) {
                  setMaxDate(undefined);
                }

                setCalendarValues(selectedDates);

                if (rangeAutoSelectEndDate) {
                  onHandleSubmit(selectedDates as DateObject[]);
                }

                if (!range) {
                  onHandleSubmit(selectedDates as DateObject);
                }
              }}
              locale={_locale === "th" ? locale_th : locale_en}
              shadow={false}
              showOtherDays={true}
              rangeHover={false}
              disableYearPicker={range}
              range={range}
              weekStartDayIndex={1}
              {...rest}
              maxDate={maxDate}
              monthYearSeparator=" "
            />

            {/* MSIG-864 แสดง label เหมือนกันทั้งในประเทศ ต่างประเทศ */}
            {range && (
              <>
                <Box bg="bg_footer" borderRadius="12px" width="100%">
                  <Text
                    py={2}
                    px="12px"
                    width="100%"
                    color="ci_blue"
                    variant="smallMediumWight"
                  >
                    <InfoIcon mr={2} /> วันที่สิ้นสุดการเดินทาง ภายใน 24.00 น.
                  </Text>
                </Box>
                {errorMessage && (
                  <Flex justifyContent="center" width="100%">
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  </Flex>
                )}
              </>
            )}
          </PopoverBody>

          {range && (
            <PopoverFooter
              height={113}
              border="none"
              borderTop="1px solid"
              borderColor="gray"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Button
                variant="solid"
                onClick={() => {
                  onHandleSubmit();
                }}
              >
                {buttonLabel}
              </Button>
            </PopoverFooter>
          )}
        </PopoverContent>
      </Portal>
    </>
  );
};

const formatCalendarHeaderDisplayDate = (locale: string, date?: DateObject) => {
  if (!date) return "\u00A0";

  if (locale === "th") {
    date.setLocale(locale_th);
    date.setCalendar(thai_th);
  }

  return `${date.day} ${date.month.shortName} ${date.year}`;
};

const CalendarHeader = ({
  title,
  calendarValues,
}: {
  title: string;
  calendarValues?: DateObject[];
}) => {
  const _locale = "th";

  return (
    <PopoverHeader
      borderBottom="1px solid"
      borderColor="gray"
      padding={0}
      display="flex"
      flexDirection="column"
      justifyContent="end"
    >
      <Text
        my="14px"
        variant="mediumParagraph"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        {title}
      </Text>

      <Grid
        color="ci_blue"
        borderTop="1px solid"
        borderColor="gray"
        backgroundColor="#e1e8f04d"
        templateColumns="repeat(2, 1fr)"
        lineHeight="18px"
      >
        {/* MSIG-864 แสดง label เหมือนกันทั้งในประเทศ ต่างประเทศ */}
        <GridItem
          borderRight="1px solid"
          borderColor="gray"
          textAlign="center"
          p={2}
        >
          <Text fontSize="16px">วันที่เริ่มต้นการเดินทาง</Text>
          <Text variant="mediumParagraph" mt="2px">
            {formatCalendarHeaderDisplayDate(_locale, calendarValues?.[0])}
          </Text>
        </GridItem>
        <GridItem textAlign="center" p={2}>
          <Text fontSize="16px">วันที่สิ้นสุดการเดินทาง</Text>
          <Text variant="mediumParagraph" mt="2px">
            {formatCalendarHeaderDisplayDate(_locale, calendarValues?.[1])}
          </Text>
        </GridItem>
      </Grid>
    </PopoverHeader>
  );
};

export const numberOfDateBetween = (values: any[]) => {
  if (values?.length === 2) {
    const [startDate, endDate] = values;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1;
  }
  return 0;
};

export const numberOfYearBetween = (values: any[]) => {
  if (values?.length === 2) {
    const [startDate, endDate] = values;
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    const numberOfYearsBetween =
      endYear > startYear && endMonth >= startMonth ? endYear - startYear : 0;

    return numberOfYearsBetween;
  }
  return 0;
};

const RangeValueLabel = ({
  label,
  dateValues,
}: {
  label: string;
  dateValues: string[];
}) => {
  const numberOfDate = numberOfDateBetween(dateValues);
  const numberOfYear = numberOfYearBetween(dateValues);

  return (
    <Text mt=".5rem" variant="smallMediumWight" color="txt_blk_2">
      {label}: {numberOfYear > 0 ? `${numberOfYear} ปี` : `${numberOfDate} วัน`}
    </Text>
  );
};

const DATE_DISPLAY_FORMAT = "DD/MM/YYYY";

export const formatInputFieldDisplayDate = (locale: string, value: string) => {
  const _date = new DateObject(value);

  // if (locale === 'th') {
  //   return _date.add(543, 'years').format(DATE_DISPLAY_FORMAT);
  // }

  // MSIG-1270 เลือกวันที่ 29 กพ ไม่ได้
  if (locale === "th") {
    _date.setLocale(locale_th);
    _date.setCalendar(thai_th);
  }

  return _date.format(DATE_DISPLAY_FORMAT);
};

const getInputFieldDisplayDate = (locale: string, dateValues?: string[]) => {
  if (!dateValues || !dateValues?.[0]) return [];

  const startDate = formatInputFieldDisplayDate(locale, dateValues[0]);
  if (dateValues.length === 1) {
    return [startDate];
  }

  const endDate = formatInputFieldDisplayDate(locale, dateValues[1]);
  return [startDate, endDate];
};

const InputField = ({
  name,
  placeholder = "",
  errorMessage,
  isOpenCalendar,
  dateValues = [],
  onClear,
  setOverIconClose,
  isDisabled,
}: IInputField & {
  errorMessage?: string;
  isOpenCalendar: boolean;
  dateValues?: string[];
  onClear: () => void;
  setOverIconClose: (_value: boolean) => void;
  isDisabled?: boolean;
}) => {
  const _locale = "th";
  const displayDate = getInputFieldDisplayDate(_locale, dateValues);

  return (
    <InputGroup>
      <Input
        name={name}
        type="text"
        value={displayDate?.join(" - ") || ""}
        placeholder={placeholder}
        isInvalid={!!errorMessage}
        autoComplete="off"
        readOnly
        isDisabled={isDisabled}
        errorBorderColor="ci_red"
      />
      <InputRightElement height="100%" cursor="pointer">
        {isOpenCalendar ? <CloseIcon /> : <CalendarIcon />}
      </InputRightElement>
    </InputGroup>
  );
};
export default InputDatePicker;
