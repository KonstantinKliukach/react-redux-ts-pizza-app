import React from 'react';
import { Flex } from 'rebass';

import useTheme from 'hooks/useTheme';

import Logo from './logo';

const Header: React.FC = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useTheme();
  return (
    <Flex
      p='8px'
      as='header'
      alignItems='center'
      justifyContent='space-between'
    >
      <Logo />
      <Flex>
        nya
      </Flex>
    </Flex>
  );
};

export default Header;
