import { Box, Container, Grid } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box id="section-footer">
      <Container py={'48px'} px={{ base: '1rem', xl: 0 }}>
        <Grid
          justifyContent="space-between"
          width="100%"
          pt="65px"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(30% 70%)',
          }}
        >
          <Image src={'/assets/images/footer.png'} alt="" width={300} height={196} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
