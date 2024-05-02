import { Icons } from '@/constants/ICONS';
import { Flex, Text } from '@chakra-ui/react';
import SVG from 'react-inlinesvg';

const ChipBeyond = () => {
  return (
    <Flex
      w={'175px'}
      alignItems={'center'}
      gap={'8px'}
      bg={'red_second_2'}
      borderRadius={'100px'}
      p={'2px 16px 2px 10px'}
    >
      <SVG src={Icons.cancel} />
      <Text color={'red_second_1'} variant={'smaller'}>
        เกินระยะความคุ้มครอง
      </Text>
    </Flex>
  );
};

export default ChipBeyond;
