import React from 'react';
import { Flex, Text } from 'rebass';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => (
  <Flex flex={1} >
    <Text>Oops, something goes wrong. Would you like to return on <Link style={{ color: 'var(--color-active)' }} to='/'>Main Page?</Link></Text>
  </Flex>
);

export default Page404;
