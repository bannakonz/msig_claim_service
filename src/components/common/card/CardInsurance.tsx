import ChipBeyond from '@/components/chip_status/ChipBeyond';
import ChipEffective from '@/components/chip_status/ChipEffective';
import { Button, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Stack, Text } from '@chakra-ui/react';

interface ICardInsurance {
  documentType: 'receipt' | 'e-policy';
  isEffective: boolean;
  onClickDetail: () => void;
  data: any;
}

const CardInsurance = ({ documentType, isEffective, onClickDetail, data }: ICardInsurance) => {
  return (
    <Card variant={'smallRadius'} w={'500px'} minH={'290px'} px={'32px'} pt={'32px'} pb={0}>
      <CardHeader p={0}>{isEffective ? <ChipEffective /> : <ChipBeyond />}</CardHeader>
      <CardBody px={0} py={'24px'}>
        {documentType === 'e-policy' ? <BodyEPolicy data={data} /> : <BodyReceipt data={data} />}
      </CardBody>
      <CardFooter pb={'32px'} px={0}>
        <SimpleGrid columns={2} spacing={0}>
          <Button
            onClick={() => onClickDetail()}
            h={'48px'}
            py={'16px'}
            px={'24px'}
            bg={'ci_blue'}
            color={'white'}
            borderRadius={'100px'}
            flex="1"
          >
            <Text variant={'paragraphMedium'}>
              {documentType === 'e-policy' ? 'ขอรับ E-Policy' : 'ขอรับใบเสร็จรับเงิน'}
            </Text>
          </Button>
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
};

const BodyEPolicy = (data: any) => {
  return (
    <SimpleGrid columns={2} spacing={0}>
      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ประเภทของกรมธรรม์
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          Group Worldwide Travel
        </Text>
      </Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          กรมธรรม์เลขที่
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          23-60xxxxx7
        </Text>
      </Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ระยะเวลาประกันภัย
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          5/12/23 ถึง 9/12/23
        </Text>
      </Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ชื่อผู้เอาประกันภัย
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          nutxxxxch juxxxxan
        </Text>
      </Stack>
    </SimpleGrid>
  );
};

const BodyReceipt = (data: any) => {
  return (
    <SimpleGrid columns={2} spacing={'8px'}>
      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ประเภทของกรมธรรม์
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          Group Worldwide Travel
        </Text>
      </Stack>

      <Stack gap={'4px'}></Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          กรมธรรม์เลขที่
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          23-60xxxxx7
        </Text>
      </Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ใบสลักหลังเลขที่
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          -
        </Text>
      </Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ระยะเวลาประกันภัย
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          5/12/23 ถึง 9/12/23
        </Text>
      </Stack>

      <Stack gap={'4px'}>
        <Text variant={'paragraphMedium'} color={'gray'}>
          ชื่อผู้เอาประกันภัย
        </Text>
        <Text variant={'paragraph'} color={'gray'}>
          nutxxxxch juxxxxan
        </Text>
      </Stack>
    </SimpleGrid>
  );
};

export default CardInsurance;
