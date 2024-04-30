import { createIcon } from '@chakra-ui/icons';
import { Checkbox as ChakraCheckbox, CheckboxProps, Icon } from '@chakra-ui/react';

const CheckedIcon = createIcon({
  displayName: 'CheckedIcon',
  viewBox: '0 0 24 24',
  path: <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white" />,
});

const Checkbox = ({ children, isIndeterminate, isChecked, ...rest }: CheckboxProps) => {
  const Icon = ({ isChecked }: any) => {
    if (!isChecked) return <></>;

    return <CheckedIcon />;
  };

  return (
    <ChakraCheckbox size="sm" icon={<Icon />} {...rest}>
      {children}
    </ChakraCheckbox>
  );
};

export default Checkbox;
