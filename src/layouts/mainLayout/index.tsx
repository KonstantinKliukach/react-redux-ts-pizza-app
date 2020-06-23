import React from 'react';
import { Box } from 'rebass';
import Header from 'components/header';

const Mainlayout: React.FC = (props) => (
  <Box maxWidth={1440} margin='0 auto' px='60px' pt='20px'>
    <Header >
      {props.children}
    </Header>
  </Box>
);

export default Mainlayout;
