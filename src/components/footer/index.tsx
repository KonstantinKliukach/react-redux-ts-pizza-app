import React from 'react';
import { Flex, Text } from 'rebass';

const Footer: React.FC = () => (
    <Flex
      p='16px'
      as='footer'
      alignItems='center'
      justifyContent='space-between'
    >
      <Text>Keeping things simple since © 2020</Text>
      <Text>Powered by <a style={{ color: 'var(--color-active)' }} href='https://github.com/KonstantinKliukach'>K.Kliukach</a></Text>
    </Flex>
);

export default Footer;
