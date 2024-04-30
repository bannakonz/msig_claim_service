import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

const FooterTop = () => {
  const imageDesktop = '/assets/images/brush.png';

  return (
    <Fragment>
      <Flex
        bg={`url(${imageDesktop})`}
        backgroundRepeat="no-repeat!important"
        backgroundPosition="right 40% center!important"
        backgroundSize="cover!important"
        height="337px"
        alignItems="center"
        textAlign="left"
        padding="0px"
      ></Flex>
    </Fragment>
  );
};

export default FooterTop;
