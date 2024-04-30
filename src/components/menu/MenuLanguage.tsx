import { colors } from '@/styles/foundations';
import { setLocale, TLocale } from '@/utils/locales';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { Fragment, useState } from 'react';

const languageList: Record<string, string> = { th: 'Th', en: 'En' };

const MenuLanguage = () => {
  const locale = useLocale();

  console.log('locale :>> ', locale);

  // const { clearSessionStorage } = useGlobalData();

  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const onLocaleChange = async (locale: string) => {
    setSelectedLanguage(locale);
    setLocale(locale as TLocale);

    // clearSessionStorage();

    window.location.reload();
  };

  return (
    <Menu>
      <MenuButton borderRadius={'100px'} p={'8px'} width={'66px'} height={'27px'} color={colors.gray} bg="base">
        <Text variant={'paragraph'}>
          {languageList[selectedLanguage]} <ChevronUpIcon />
        </Text>
      </MenuButton>
      <MenuList zIndex={2}>
        {Object.keys(languageList).map((k, i) => {
          return (
            <Fragment key={i}>
              <MenuItem
                value={languageList[k]}
                onClick={() => {
                  onLocaleChange(k);
                }}
                pr={4}
              >
                {languageList[k]}
              </MenuItem>
              {Object.keys(languageList).length - 1 !== i ? <MenuDivider /> : undefined}
            </Fragment>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default MenuLanguage;
