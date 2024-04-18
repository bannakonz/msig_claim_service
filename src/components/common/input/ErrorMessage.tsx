import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const ErrorMessage = ({ children }: { children: ReactNode }) => (
  <Text fontSize="16px" color="ci_red" mt="8px" lineHeight="1em">
    {children}
    {"\u00A0"}
  </Text>
);

export default ErrorMessage;
