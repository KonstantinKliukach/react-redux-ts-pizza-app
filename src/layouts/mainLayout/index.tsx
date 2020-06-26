import React from 'react';
import { Flex } from 'rebass';
import Header from 'components/header';
import Menu from 'components/menu';
import Footer from 'components/footer';

const Mainlayout: React.FC = (props) => (
  <Flex
    maxWidth={1440}
    margin='0 auto'
    px='60px'
    pt='20px'
    flexDirection='column'
    flex={1}
  >
    <Header />
    <Flex mt='20px' flex={1}>
      {props.children}
    </Flex>
    <Footer />
  </Flex>
);

export default Mainlayout;
