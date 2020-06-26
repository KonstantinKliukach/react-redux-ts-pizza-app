import React from 'react';
import { Flex, Text } from 'rebass';

import { ReactComponent as ReactLogo } from 'assets/icons/pizza/pizza.svg';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link to='/'>
    <Flex>
      <ReactLogo width={'40px'} height='40px' fillOpacity={1} fill={'var(--text-color)'} />
      <Flex ml='10px' alignItems='center'>
        <Text fontSize='16px' fontFamily='Sriracha' sx={{ textTransform: 'uppercase' }}>Keep It Simple<br /> Pizza</Text>
      </Flex>
    </Flex>
  </Link>
);

export default Logo;
