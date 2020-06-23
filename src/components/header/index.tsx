import React from 'react';
import { Flex, Box } from 'rebass';

import useTheme from 'hooks/useTheme';

import Logo from './logo';
import User from './user';
import Cart from './cart';
import ThemeSwitcher from './themeSwitcher';

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
      <Flex alignItems='center'>
        <ThemeSwitcher />
        <Box ml='12px'>
          <Cart />
        </Box>
        <Box ml='12px'>
          <User />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
