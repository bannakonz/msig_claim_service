import Label from '@/components/common/input/Label';
import { Icons } from '@/constants/ICONS';
import { variants as RadioVariants } from '@/styles/components/Radio';
import { colors } from '@/styles/foundations';
import {
  Box,
  RadioGroup as ChakraRadioGroup,
  RadioProps,
  Stack,
  StackProps,
  Text,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { Fragment, ReactNode } from 'react';
import SVG from 'react-inlinesvg';
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
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: value,
    onChange: console.log,
  });
  const group = getRootProps();

  return (
    <Fragment>
      {label ? <Label required={required}>{label}</Label> : <></>}
      <ChakraRadioGroup w={width} onChange={onHandleChange} value={value} alignSelf="center" name={name}>
        <Stack {...styleStack} {...group}>
          {options &&
            options.map((option, index: number) => {
              const radio = getRadioProps({ value: option.value });
              return (
                <CustomRadio key={index} {...radio} value={option.value} {...rest} isDisabled={option?.isDisabled}>
                  <Text color="gray" variant={'paragraph'} as="span">
                    {option?.name}
                  </Text>
                </CustomRadio>
              );
            })}
        </Stack>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ChakraRadioGroup>
    </Fragment>
  );
};

function CustomRadio(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" display={'inline-flex'} cursor="pointer" alignItems="center" ml="-11px" mt="-8px" mb="-8px">
      <input {...input} />
      <Box
        p="8px"
        as="span"
        display={'inline-flex'}
        alignItems="center"
        justifyContent="center"
        borderRadius="20px"
        // TODO: ปิด Effect Radio กับ Checkbox ให้เหมือนกันไปก่อน
        // _hover={{
        //   bgColor: `${colors.blue_second_4 + '50'}`,
        // }}
        // _focus={{
        //   bgColor: `${colors.blue_second_3 + '30'}`,
        // }}
        // _active={{
        //   bgColor: `${colors.blue_second_3 + '40'}`,
        // }}
      >
        <Box {...checkbox} w="24px" h="24px">
          <SVG
            opacity={input.disabled ? '0.38' : '1'}
            src={input.checked ? Icons.radioChecked : Icons.radioUnChecked}
          />
        </Box>
      </Box>

      {props.children}
    </Box>
  );
}

export default RadioGroup;
