import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { Link } from 'react-router-dom';

interface MenuItem {
  path: string
  name: string
  active: boolean
}

const MenuItem: React.FC<MenuItem> = (props) => {
  const { active, name, path } = props;
  return (
    <Flex mb='8px'>
      {props.children}
      <Box ml='6px'>
        <Link to={path}><Text fontWeight={active ? 'bold' : 'normal'}>{name}</Text></Link>
      </Box>
    </Flex>
  );
};

export default MenuItem;
