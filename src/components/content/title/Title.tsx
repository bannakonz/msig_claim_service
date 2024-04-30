import { variants as TextVariants } from '@/styles/components/Text';
import { Box, BoxProps, Heading, HeadingProps, ResponsiveValue, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IHeadingProps extends HeadingProps {
  children: ReactNode;
  variant?: ResponsiveValue<keyof typeof TextVariants>;
  titleBorder?: BoxProps;
}

const Title = ({
  children,
  gap = 8,
  variant = 'heading',
  alignItems = 'center',
  textAlign = 'center',
  titleBorder,
  ...rest
}: IHeadingProps) => {
  return (
    <Stack gap={gap} alignItems={alignItems}>
      <Heading variant={variant} textAlign={textAlign} {...rest}>
        {children}
      </Heading>
      <TitleBorder {...titleBorder} />
    </Stack>
  );
};

export const TitleBorder = ({ w = '42px', h = '8px', ...rest }: BoxProps) => (
  <Box w={w} h={h} bg="ci_red" borderRadius="full" mt="0 !important" {...rest} />
);

export default Title;
