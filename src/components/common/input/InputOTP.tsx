import { HStack, PinInput, PinInputField } from '@chakra-ui/react';

interface InputOTPProps {
  onChange: (_e: string) => void;
  onComplete?: (_e: string) => void;
  autoFocus?: boolean;
  type?: 'alphanumeric' | 'number';
  size?: string;
  placeholder?: string;
  mask?: boolean;
  value?: string;
}

const InputOTP = ({
  onChange,
  onComplete,
  type,
  mask = false,
  size = 'lg',
  autoFocus = true,
  placeholder,
  value,
}: InputOTPProps) => {
  const handleChange = (e: string) => {
    onChange && onChange(e);
  };
  const handleComplete = (e: string) => {
    onComplete && onComplete(e);
  };
  const pinInputProps = {
    borderColor: 'gray',
    color: 'txt_normal',
    fontSize: '36px',
  };

  return (
    <HStack>
      <PinInput
        onChange={handleChange}
        onComplete={handleComplete}
        type={type}
        autoFocus={autoFocus}
        placeholder={placeholder}
        size={size}
        mask={mask}
        value={value}
      >
        <PinInputField {...pinInputProps} />
        <PinInputField {...pinInputProps} />
        <PinInputField {...pinInputProps} />
        <PinInputField {...pinInputProps} />
        <PinInputField {...pinInputProps} />
        <PinInputField {...pinInputProps} />
      </PinInput>
    </HStack>
  );
};

export default InputOTP;
