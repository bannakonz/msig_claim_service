import { colors } from '@/styles/foundations';
import { Grid, GridItem, Text } from '@chakra-ui/react';

export default {
  title: 'Base/Colors',
  argTypes: {},
};

const Template = () => (
  <>
    {Object.keys(colors).map((color, index) => {
      return (
        <Grid key={index} templateColumns="repeat(2, 1fr)">
          <GridItem width={50} height={50} bg={(colors as any)[color]} />
          <Text>
            {color} : {`${(colors as any)[color]}`}
          </Text>
        </Grid>
      );
    })}
  </>
);

export const ColorsTemp = Template.bind({});
