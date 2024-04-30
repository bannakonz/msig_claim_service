import { Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const ErrorMessage = ({ children }: { children: ReactNode }) => (
  <Text variant={'smaller'} color="red_second_1" mt="8px" mx="16px">
    {children}
    {'\u00A0'}
  </Text>
);

export default ErrorMessage;
