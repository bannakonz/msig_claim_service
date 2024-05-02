import { Box, Container, Divider, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { TabGroup } from '@/components/common/tab';
import { Icons } from '@/constants/ICONS';
import SocialIcons from '@/components/common/social';
import Link from 'next/link';

const Footer = () => {
  const menuLists = [
    {
      href: '/',
      menuName: 'MSIG Assist (24 ชั่วโมง): +66 2039 5704',
      menuNameTH: 'MSIG Assist (24 ชั่วโมง): +66 2039 5704',
    },
    {
      href: '/',
      menuName: 'ศูนย์เคลมฮอตไลน์ เอ็ม เอส ไอ จี (24 ชั่วโมง): 1259 กด 2',
      menuNameTH: 'ศูนย์เคลมฮอตไลน์ เอ็ม เอส ไอ จี (24 ชั่วโมง): 1259 กด 2',
    },
    {
      href: '/',
      menuName: 'ลิขสิทธิ์ถูกต้อง ©2024 MSIG ประเทศไทย',
      menuNameTH: 'ลิขสิทธิ์ถูกต้อง ©2024 MSIG ประเทศไทย',
    },
    {
      href: '/',
      menuName: 'ติดต่อเรา',
      menuNameTH: 'ติดต่อเรา',
    },
    {
      href: '/',
      menuName: 'เงื่อนไขการให้บริการ',
      menuNameTH: 'เงื่อนไขการให้บริการ',
    },
  ];

  return (
    <Box id="section-footer" mb={{ base: '1rem', xl: 0 }}>
      <Container py={'48px'} px={{ base: '1rem', xl: 0 }}>
        <Grid
          justifyContent="space-between"
          width="100%"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            xl: ['repeat(1, 1fr)', '30% 70%'],
          }}
          gap="4px"
        >
          <Image src={'/assets/images/footer.png'} alt="logo_msig" width={300} height={196} />
          <Flex gap="24px" flexDirection={'column'} mt={'24px'}>
            <Box display={{ base: 'none', xl: 'block' }}>
              <TabGroup
                data={[
                  { tabName: 'บริการเคลม', value: '' },
                  { tabName: 'บริการเอกสารออนไลน์', value: '' },
                  { tabName: 'รายชื่ออู่และศูนย์บริการ', value: '' },
                  { tabName: 'รายชื่อสถานพยาบาลที่เข้าร่วมโครงการ', value: '' },
                ]}
              />
            </Box>

            <Flex
              flexDirection={{ base: 'column', lg: 'row' }}
              alignItems={'center'}
              justifyContent={'space-between'}
              gap="24px"
            >
              <Text color={'gray'}>
                บมจ. เอ็ม เอส ไอ จี ประกันภัย (ประเทศไทย) 1908 อาคาร เอ็ม เอส ไอ จี ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ
                เขตห้วยขวาง กรุงเทพฯ 10310
              </Text>
              <Flex gap={'4px'}>
                <SocialIcons
                  dataSocial={[
                    { icon: Icons.facebook, alt: 'Facebook' },
                    { icon: Icons.ig, alt: 'Instagram' },
                    { icon: Icons.tiktok, alt: 'TikTok' },
                    { icon: Icons.youtube, alt: 'YouTube' },
                    { icon: Icons.line, alt: 'Line' },
                  ]}
                />
              </Flex>
            </Flex>
            <Grid
              justifyContent="space-between"
              width="100%"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                xl: 'repeat(2, 1fr)',
              }}
              gap="4px"
            >
              <GridItem
                alignItems={{ base: 'center', xl: 'flex-start' }}
                display="flex"
                justifyContent={{ base: 'center', xl: 'flex-start' }}
                flexDirection={{ base: 'column', xl: 'row' }}
                gap={{ base: '8px', xl: 0 }}
              >
                {menuLists.map((navItem, index) => {
                  return (
                    <Flex key={navItem.menuName} maxH="20px" justifyContent="center" alignItems="center">
                      {index !== 0 && (
                        <Divider
                          orientation="vertical"
                          h="12px"
                          color="gray"
                          mx="16px"
                          display={{ base: 'none', xl: 'block' }}
                        />
                      )}
                      <Link href={navItem?.href}>
                        <Text variant="smaller" color="gray" isTruncated>
                          {navItem.menuName}
                        </Text>
                      </Link>
                    </Flex>
                  );
                })}
              </GridItem>
            </Grid>
          </Flex>
        </Grid>

        {/*<Flex justifyContent={"space-between"}>*/}
        {/*  */}
        {/*  <Flex gap={"24px"} flexDirection={"column"}>*/}
        {/*    <TabGroup*/}
        {/*      data={[*/}
        {/*        { tabName: 'บริการเคลม', value: '' },*/}
        {/*        { tabName: 'บริการเอกสารออนไลน์', value: '' },*/}
        {/*        { tabName: 'รายชื่ออู่และศูนย์บริการ', value: '' },*/}
        {/*        { tabName: 'รายชื่อสถานพยาบาลที่เข้าร่วมโครงการ', value: '' },*/}
        {/*      ]} display={{base: 'none', lg: 'flex'}}/>*/}
        {/*    <Flex alignItems={"center"} gap={"24px"} justifyContent={"space-between"}>*/}
        {/*      <Text color={"gray"}>บมจ. เอ็ม เอส ไอ จี ประกันภัย (ประเทศไทย) 1908 อาคาร เอ็ม เอส ไอ จี ถ.เพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310</Text>*/}
        {/*      <Flex gap="4px">*/}
        {/*        <SocialIcons dataSocial={[*/}
        {/*          { icon: Icons.facebook, alt: 'Facebook' },*/}
        {/*          { icon: Icons.ig, alt: 'Instagram' },*/}
        {/*          { icon: Icons.tiktok, alt: 'TikTok' },*/}
        {/*          { icon: Icons.youtube, alt: 'YouTube' },*/}
        {/*          { icon: Icons.line, alt: 'Line' },*/}
        {/*        ]} />*/}
        {/*      </Flex>*/}
        {/*    </Flex>*/}
        {/*    <Grid*/}
        {/*      justifyContent="space-between"*/}
        {/*      width="100%"*/}
        {/*      templateColumns={{*/}
        {/*        base: 'repeat(1, 1fr)',*/}
        {/*        xl: 'repeat(2, 1fr)',*/}
        {/*      }}*/}
        {/*      gap="4px"*/}
        {/*    >*/}
        {/*      <GridItem*/}
        {/*        alignItems={{ base: 'center', xl: 'flex-start' }}*/}
        {/*        display="flex"*/}
        {/*        justifyContent={{ base: 'center', xl: 'flex-start' }}*/}
        {/*        flexDirection={{ base: 'column', xl: 'row' }}*/}
        {/*        gap={{ base: '8px', xl: 0 }}*/}
        {/*      >*/}
        {/*        {menuLists.map((navItem, index) => {*/}
        {/*          return (*/}
        {/*            <Flex*/}
        {/*              key={navItem.menuName}*/}
        {/*              maxH="20px"*/}
        {/*              justifyContent="center"*/}
        {/*              alignItems="center"*/}
        {/*            >*/}
        {/*              {index !== 0 && (*/}
        {/*                <Divider*/}
        {/*                  orientation="vertical"*/}
        {/*                  h="12px"*/}
        {/*                  color="white"*/}
        {/*                  mx="40px"*/}
        {/*                  display={{ base: 'none', xl: 'block' }}*/}
        {/*                />*/}
        {/*              )}*/}
        {/*              <Link href={navItem?.href}>*/}
        {/*                <Text variant="smaller" color="gray" isTruncated>*/}
        {/*                  {navItem.menuName}*/}
        {/*                </Text>*/}
        {/*              </Link>*/}
        {/*            </Flex>*/}
        {/*          );*/}
        {/*        })}*/}
        {/*      </GridItem>*/}
        {/*    </Grid>*/}
        {/*  </Flex>*/}
        {/*</Flex>*/}
      </Container>
    </Box>
  );
};

export default Footer;
