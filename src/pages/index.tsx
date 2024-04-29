import { Container, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <>
      <Container>
        <Text variant={'mediumParagraph'}>Hello world</Text>
        <Input placeholder={"Please enter your name"} />
      </Container>
    </>
  );
}
