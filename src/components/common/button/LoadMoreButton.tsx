import { RepeatIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, Text } from '@chakra-ui/react';

interface ILoadMoreButton extends ButtonProps {
  buttonName: string;
  isLoading: boolean;
  variant: string;
}

const LoadMoreButton = ({ buttonName, isLoading, variant, ...rest }: ILoadMoreButton) => {
  return (
    <Button variant="outline" loadingText={buttonName} isLoading={isLoading} leftIcon={<RepeatIcon />} {...rest}>
      <Text variant={variant}>{buttonName}</Text>
    </Button>
  );
};

export default LoadMoreButton;
