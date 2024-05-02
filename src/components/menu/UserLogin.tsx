import { Icons } from '@/constants/ICONS';
import { colors } from '@/styles/foundations';
import { Flex, Text } from '@chakra-ui/react';
import SVG from 'react-inlinesvg';

const UserLogin = () => {
  return (
    <Flex alignItems={'center'} gap={'16px'}>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'100%'}
        bg={'blue_second_4'}
        width={'48px'}
        height={'48px'}
      >
        <SVG src={Icons.riUserLine} />
      </Flex>
      <Text color={colors.gray} variant={'paragraph'}>
        เข้าสู่ระบบ
      </Text>
    </Flex>
  );
};

export default UserLogin;
