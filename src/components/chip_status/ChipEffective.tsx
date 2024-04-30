import { Icons } from '@/constants/ICONS';
import { Flex, Text } from '@chakra-ui/react';
import SVG from 'react-inlinesvg';

const ChipEffective = () => {
  return (
    <Flex
      width={'125px'}
      alignItems={'center'}
      gap={'8px'}
      bg={'green_mint_alpha.100'}
      borderRadius={'100px'}
      p={'2px 16px 2px 10px'}
    >
      <SVG src={Icons.calendar} />
      <Text color={'green_mint'} variant={'smaller'}>
        มีผลคุ้มครอง
      </Text>
    </Flex>
  );
};

export default ChipEffective;
