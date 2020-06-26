import React from 'react';

import { Flex, Text } from 'rebass';
import { useParams } from 'react-router-dom';

const Success: React.FC = () => {
  const { id } = useParams();
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center' flex='1'>
      <Text>
        Thank you! Your order is accepted.
        Wait for the manager call you to refine all details.
      </Text>
      <Text color={'var(--color-active)'}>{`Your order's ID: ${id}`}</Text>
    </Flex>
  );
};

export default Success;
