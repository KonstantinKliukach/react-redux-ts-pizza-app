import React from 'react';
import { Flex, Text, Button } from 'rebass';
import SubmitButton from 'components/button';

interface Submit {
  sum: string,
  onSubmit: () => void
  label: string
}

const Submit: React.FC<Submit> = ({ sum, ...rest }) => (
  <Flex
    py='32px'
    px='32px'
    alignItems='center'
    justifyContent='space-between'
    sx={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <Text color={'var(--text-color)'}>{`Total: ${sum}`}</Text>
    <SubmitButton {...rest} />
  </Flex>
);

export default Submit;
