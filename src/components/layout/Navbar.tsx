import { Icons } from '@/constants/ICONS';
import { colors } from '@/styles/foundations';
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import { MenuLanguage } from '../menu';
import UserLogin from '../menu/UserLogin';

interface INavBar {
  data: {
    urlPath: string;
    menuGroupLists: any[];
  };
}

const NavBar = ({ data }: any) => {
  const { isOpen, onToggle, onClose: onCloseMobileNav } = useDisclosure();
  const menuGroupLists = [
    {
      sortID: 1,
      menuGroupName: 'ผลิตภัณฑ์ทั้งหมด',
      menuGroupType: 'Product',
      hasSubMenu: true,
      href: '/main',
      alt: '',
      menuLists: [
        {
          sortID: 1,
          menuName: 'ประกันภัยการเดินทาง',
          insuranceProductCode: 'TRAVEL',
          href: '/main/travel',
          alt: '',
        },
        {
          sortID: 2,
          menuName: 'ประกันภัยรถยนต์',
          insuranceProductCode: 'MOTOR',
          href: '/main/motor',
          alt: '',
        },
      ],
    },
    {
      sortID: 2,
      menuGroupName: 'ติดต่อผู้เชี่ยวชาญ',
      menuGroupType: 'MSIG_Menu',
      hasSubMenu: false,
      href: '/contact-specialist',
      alt: '',
    },
  ];
  const router = useRouter();

  const DesktopNav = () => {
    return (
      <Stack direction="row" alignItems="center" gap="32px" spacing="0px">
        {menuGroupLists?.map((navItem) => {
          const menuId = `menu_id_${navItem.sortID}`;
          let isSelected: boolean = false;

          return (
            <Flex key={navItem.menuGroupName} height="100%" alignItems="center">
              <Popover trigger="hover" id={menuId} placement="bottom-start">
                <Flex flexDirection="column" height="100%" alignItems="center" justifyContent="space-between">
                  <PopoverTrigger>
                    <Button
                      as={Link}
                      p={0}
                      bg="white"
                      href={navItem.href ?? '#'}
                      color={isSelected ? 'ci_blue' : 'txt_normal'}
                      _hover={{
                        bg: 'white',
                        borderRadius: 0,
                        color: 'ci_blue',
                      }}
                      _focus={{
                        bg: 'white',
                        borderRadius: 0,
                        color: 'ci_blue',
                      }}
                      _active={{ color: 'ci_blue' }}
                      borderRadius={0}
                    >
                      <Flex flexDirection="column" alignItems="center" justifyContent="flex-start">
                        <Text
                          color={colors.gray}
                          variant={isSelected ? 'paragraph' : 'paragraph'}
                          paddingBottom="24px"
                          paddingTop="29px"
                        >
                          {navItem.menuGroupName}
                        </Text>
                        <Box
                          height="6px"
                          width="55px"
                          bg={isSelected ? 'ci_red' : 'transparent'}
                          borderTopRadius="5px"
                        />
                      </Flex>
                    </Button>
                  </PopoverTrigger>
                </Flex>

                {navItem.menuLists && (
                  <PopoverContent border={0} boxShadow="xl" p={4} rounded="xl" minW="sm">
                    <Stack>
                      {navItem.menuLists.map((child) => (
                        <DesktopSubNav key={child.menuName} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Flex>
          );
        })}
      </Stack>
    );
  };

  const DesktopSubNav = ({ menuName, href }: any) => {
    return (
      <Link href={href} role="group" style={{ display: 'block', padding: 8 }}>
        <Stack direction="row" align="center">
          <Box>
            <Text
              transition="all .3s ease"
              _groupHover={{ color: 'ci_blue' }}
              fontWeight={500}
              _hover={{ color: 'ci_blue' }}
            >
              {menuName}
            </Text>
          </Box>
        </Stack>
      </Link>
    );
  };

  const MobileNav = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
    return (
      <Drawer placement="left" onClose={onToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" justifyContent="space-between" borderColor={colors.gray}>
            <SVG src={Icons.logo} />

            <IconButton
              justifyContent="flex-end"
              height="100%"
              onClick={onToggle}
              icon={<CloseIcon w={3} h={3} />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </DrawerHeader>
          <DrawerBody>
            {menuGroupLists?.map((navItem, index) => {
              const item = { ...navItem, index };
              return <MobileNavItem key={navItem.menuGroupName} {...item} />;
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };

  const MobileNavItem = ({ menuGroupName, index, menuLists, href }: any) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <Stack spacing={4}>
        <Flex
          py={4}
          justify="space-between"
          align="center"
          color="txt_normal"
          _hover={{
            color: 'ci_blue',
            textDecoration: 'none',
          }}
        >
          <Link href={href} onClick={onCloseMobileNav}>
            <Text fontSize="xl" color="txt_normal">
              {menuGroupName}
            </Text>
          </Link>

          {menuLists && (
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              onClick={onToggle}
            />
          )}
        </Flex>

        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle="solid"
            // borderColor={colors.border_gray}
            align="start"
          >
            {menuLists &&
              menuLists.map((child: any) => (
                <Link key={child.menuName} style={{ padding: 8 }} href={child.href} onClick={onCloseMobileNav}>
                  {child.menuName}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  return (
    <Box
      left={0}
      right={0}
      top={0}
      zIndex={999}
      position="sticky"
      backgroundColor="white"
      boxShadow={`0px 1px 5px 0px ${colors.blue_second_4}`}
    >
      <Box px={'40px'}>
        <Flex height="89px" alignItems="center" justifyContent="space-between">
          <Link href={'/'} style={{ alignItems: 'center', cursor: 'pointer', display: 'flex' }}>
            <Image src={data?.urlPath} height={{ base: '48px', xl: '52px' }} />
          </Link>

          <Flex
            display={{ base: 'none', xl: 'flex' }}
            alignItems="center"
            justifyContent={'space-between'}
            width={'100%'}
            gap="32px"
          >
            <DesktopNav />
            <SVG src={Icons.logo} />
            <Flex gap={'32px'} alignItems={'center'}>
              <MenuLanguage />
              <UserLogin />
            </Flex>
          </Flex>

          {!isOpen ? (
            <Flex
              flex={{ base: 1, md: 'auto', xs: 'end' }}
              display={{ base: 'flex', xl: 'none' }}
              alignItems="center"
              gap="24px"
            >
              <IconButton
                onClick={onToggle}
                icon={<HamburgerIcon />}
                variant="ghost"
                aria-label="Toggle Navigation"
                minW="auto"
                minH="auto"
              />
            </Flex>
          ) : undefined}
        </Flex>
      </Box>

      <MobileNav isOpen={isOpen} onToggle={onToggle} />
    </Box>
  );
};

export default NavBar;
