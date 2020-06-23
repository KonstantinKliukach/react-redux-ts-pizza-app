import React from 'react';
import { Box, Flex } from 'rebass';
import Header from 'components/header';
import Menu from 'components/menu';

const Mainlayout: React.FC = (props) => (
  <Box maxWidth={1440} margin='0 auto' px='60px' pt='20px'>
    <Header >
      {props.children}
    </Header>
    <Flex>
      <Menu />
    </Flex>
  </Box>
);

export default Mainlayout;
