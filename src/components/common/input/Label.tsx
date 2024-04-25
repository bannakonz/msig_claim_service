import { variants as TextVariants, variants } from '@/styles/components/Text';
import { Flex, Text, TypographyProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import SVG from 'react-inlinesvg';
import RequireMark from './RequireMark';

export interface IBaseLabel {
  label?: string;
  required?: boolean;
  tooltip?: string | ReactNode;
  titleVariant?: keyof typeof TextVariants;
  icon?: string;
}

interface ILabel extends IBaseLabel {
  children?: ReactNode;
  fontWeight?: TypographyProps['fontWeight'];
  variant?: keyof typeof variants;
}

export default ({ children, required = false, tooltip, fontWeight, icon, variant = 'paragraphMedium' }: ILabel) => {
  if (!children) {
    return <></>;
  }

  return (
    <Flex gap={2} mb="0.5rem">
      <Text
        variant={variant}
        sx={{
          '& svg': {
            display: 'inline !important',
            mr: '0.5rem',
            width: '1.5rem',
            height: '1.5rem',
          },
        }}
        color="dark"
        display="flex"
        fontWeight={fontWeight}
      >
        {icon && <SVG display="inline" src={icon} />}
        <span>
          {children}
          {required ? <RequireMark /> : undefined}
        </span>
      </Text>
    </Flex>
  );
};
