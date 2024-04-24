import { Container, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <>
      <Container bg="bg">
        <Text variant={'mediumParagraph'}>Hello world</Text>
        <Input />
      </Container>
    </>
  );
}
