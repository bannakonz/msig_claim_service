import { colors } from '@/styles/foundations';
import { Button, Card, CardBody, CardFooter, Image, Stack, Text } from '@chakra-ui/react';

interface ICardPolicy {
  image: string;
  title: string;
  detail?: string;
  onClickClaim?: () => void;
  onClickCheck?: () => void;
}

const CardPolicy = ({ image, title, detail, onClickCheck, onClickClaim }: ICardPolicy) => {
  return (
    <Card variant={'mediumRadius'} w={'368px'}>
      <Image objectFit="cover" h={'207px'} src={image} alt="" borderTopRadius={'16px'} />

      <CardBody>
        <Stack gap={'8px'}>
          <Text variant={'paragraphMedium'}>{title}</Text>
          <Text variant={'paragraph'} color={'gray'}>
            {detail}
          </Text>
        </Stack>
      </CardBody>

      {(onClickCheck || onClickClaim) && (
        <CardFooter justify="space-between" flexWrap="wrap" gap={'16px'}>
          {onClickClaim && (
            <Button h={'48px'} py={'16px'} px={'24px'} bg={'ci_blue'} color={'white'} borderRadius={'100px'} flex="1">
              <Text variant={'paragraphMedium'}>แจ้งเคลมออนไลน์</Text>
            </Button>
          )}

          {onClickCheck && (
            <Button
              h={'48px'}
              py={'16px'}
              px={'24px'}
              border={`1px solid ${colors.blue_second_3}`}
              borderRadius={'100px'}
              flex="1"
            >
              <Text color={'blue_second_1'} variant={'paragraphMedium'}>
                เช็คสถานะเคลม
              </Text>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default CardPolicy;
