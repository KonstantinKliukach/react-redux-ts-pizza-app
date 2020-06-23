import React from 'react';
import { Flex, Image, Text } from 'rebass';

import logo from 'assets/icons/pizza/pizza.svg';

const Logo: React.FC = () => (
  <Flex>
    <Image src={logo} minHeight='40px' minWidth='40px' />
    <Flex ml='10px' alignItems='center'>
      <Text fontSize='16px' fontFamily='Sriracha' sx={{ textTransform: 'uppercase' }}>Keep It Simple<br /> Pizza</Text>
    </Flex>
  </Flex>
);

export default Logo;
