import { Icons } from '@/constants/ICONS';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import SVG from 'react-inlinesvg';
import ErrorMessage from '../input/ErrorMessage';
import Label from './Label';

interface IInputField {
  name: string;
  placeholder?: string;
}

interface IInputTimePicker {
  label?: string;
  isRequired?: boolean;
  inputField: IInputField;
  value: string;
  errorMessage?: string;
  onChangeTimeValue: (_timeValue: string) => void;
  placement?: PlacementWithLogical;
  isDisabled?: boolean;
}

const InputTimePicker = ({
  label,
  isRequired,
  inputField,
  value,
  errorMessage,
  onChangeTimeValue,
  placement = 'bottom',
  isDisabled,
}: IInputTimePicker) => {
  const initPopoverRef = useRef(null);
  const { onOpen: onOpenTime, onClose: onCloseTime, isOpen: isOpenTime } = useDisclosure();

  const onSubmitTime = (timeValue: string) => {
    onChangeTimeValue(timeValue);
    onCloseTime();
  };

  const onClear = () => {
    onChangeTimeValue('');

    const docId = `popover-content-time-popover-${inputField.name}`;
    document.getElementById(docId)?.focus();
  };

  return (
    <Box>
      <Popover
        id={`time-popover-${inputField.name}`}
        onOpen={() => {
          if (!isDisabled) {
            onOpenTime();
          }
        }}
        onClose={() => {
          onCloseTime();
        }}
        isOpen={isOpenTime}
        closeOnBlur
        placement={placement}
        initialFocusRef={initPopoverRef}
        isLazy
      >
        {label ? <Label required={isRequired}>{label}</Label> : <></>}
        <PopoverTrigger>
          <div>
            <InputField
              {...inputField}
              isOpenTime={isOpenTime}
              timeValue={value}
              errorMessage={errorMessage}
              isDisabled={isDisabled}
              onClear={onClear}
            />
          </div>
        </PopoverTrigger>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        {isOpenTime && <TimeContent timeValues={value} onSubmitTime={onSubmitTime} />}
      </Popover>
    </Box>
  );
};

const TimeContent = (props: { timeValues?: string; onSubmitTime: (_timeValue: string) => void }) => {
  const { timeValues, onSubmitTime } = props;

  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const onHandleSubmit = () => {
    const formatted: string = `${selectedHour}:${selectedMinute}`;
    onSubmitTime(formatted);
  };

  const onHourChange = (value: string) => {
    setSelectedHour(value);
  };

  const onMinuteChange = (value: string) => {
    setSelectedMinute(value);
  };

  const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}`);
  const minutes = Array.from({ length: 60 / 5 }, (_, i) => `${(i * 5).toString().padStart(2, '0')}`);

  useEffect(() => {
    if (timeValues) {
      const [hourString, minuteString] = timeValues.split(':');
      setSelectedHour(hourString);
      setSelectedMinute(minuteString);
    }
  }, [timeValues]);

  return (
    <>
      <Portal>
        <PopoverContent
          shadow="none"
          borderRadius="16px"
          border="1px solid"
          borderColor="bg"
          width="auto"
          overflow={'hidden'}
        >
          <PopoverHeader borderColor="bg" p="8px 12px" bg="blue_second_1">
            <Text variant={'subTitleMedium'} color={'white_floral'}>
              Time {selectedHour}:{selectedMinute}
            </Text>
          </PopoverHeader>
          <PopoverBody display="flex" alignItems="flex-start" p="0px">
            <Box h="210px" px="2px" overflowY="scroll">
              {hours.map((hour) => (
                <Box
                  key={hour}
                  onClick={() => onHourChange(hour)}
                  as="option"
                  textAlign="center"
                  p="8px 16px"
                  cursor="pointer"
                  fontSize="15px"
                  _hover={{ bg: 'blue_second_3', color: 'white' }}
                  color={'gray'}
                  bg={selectedHour === hour ? 'blue_second_4' : 'white'}
                >
                  {hour}
                </Box>
              ))}
            </Box>
            <Box h="210px" px="2px" overflowY="scroll" borderLeftWidth="1px" borderColor="bg">
              {minutes.map((min) => (
                <Box
                  key={min}
                  onClick={() => onMinuteChange(min)}
                  as="option"
                  textAlign="center"
                  p="8px 16px"
                  cursor="pointer"
                  fontSize="15px"
                  _hover={{ bg: 'blue_second_3', color: 'white' }}
                  color={'gray'}
                  bg={selectedMinute === min ? 'blue_second_4' : 'white'}
                >
                  <Text variant="smaller">{min}</Text>
                </Box>
              ))}
            </Box>
          </PopoverBody>

          <PopoverFooter
            border="none"
            borderTop="1px solid"
            borderColor="bg"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              variant="ghost"
              color={'ci_blue'}
              onClick={() => {
                onHandleSubmit();
              }}
              p="8px"
            >
              <Text variant={'paragraphMedium'} color={'ci_blue'}>
                OK
              </Text>
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </>
  );
};

const InputField = ({
  name,
  placeholder = '00:00',
  errorMessage,
  isOpenTime,
  timeValue,
  isDisabled,
  onClear,
}: IInputField & {
  errorMessage?: string;
  isOpenTime: boolean;
  timeValue: string;
  isDisabled?: boolean;
  onClear: () => void;
}) => {
  return (
    <InputGroup>
      <Input
        name={name}
        type="text"
        value={timeValue}
        placeholder={placeholder}
        isInvalid={!!errorMessage}
        autoComplete="off"
        readOnly
        isDisabled={isDisabled}
        errorBorderColor="red_second_1"
      />
      <InputRightElement height="100%" cursor="pointer">
        {timeValue ? (
          <CloseIcon color="gray" onClick={onClear} />
        ) : (
          <SVG width={'24px'} height={'24px'} src={Icons.clock} />
        )}
      </InputRightElement>
    </InputGroup>
  );
};
export default InputTimePicker;
