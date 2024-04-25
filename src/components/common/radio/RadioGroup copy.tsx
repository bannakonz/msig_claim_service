import Label from '@/components/common/input/Label';
import { variants as RadioVariants } from '@/styles/components/Radio';
import { RadioGroup as ChakraRadioGroup, Flex, Radio, RadioProps, Stack, StackProps, Text } from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';
import ErrorMessage from '../input/ErrorMessage';

interface IRadioGroup extends RadioProps {
  label?: string;
  onHandleChange: (_value: string) => void;
  options: { value: string; name: string; image?: ReactNode; isDisabled?: boolean }[];
  required?: boolean;
  variant?: keyof typeof RadioVariants;
  styleStack?: StackProps;
  errorMessage?: string;
  width?: string;
  tooltip?: string;
}

const RadioGroup = ({
  value,
  name,
  label,
  onHandleChange,
  options,
  required,
  styleStack,
  errorMessage,
  width = 'auto',
  tooltip,
  ...rest
}: IRadioGroup) => {
  return (
    <Fragment>
      {label ? <Label required={required}>{label}</Label> : <></>}
      <ChakraRadioGroup w={width} onChange={onHandleChange} value={value} alignSelf="center" name={name}>
        <Stack {...styleStack}>
          {options &&
            options.map((option, index: number) => {
              return (
                <Radio key={index} value={option.value} {...rest} isDisabled={option?.isDisabled}>
                  <Flex alignItems="center" gap="4">
                    {option.image}
                    <Text color="gray" variant={'paragraph'}>
                      {option?.name}
                    </Text>
                  </Flex>
                </Radio>
              );
            })}
        </Stack>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ChakraRadioGroup>
    </Fragment>
  );
};

export default RadioGroup;
