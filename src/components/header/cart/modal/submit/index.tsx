import React from 'react';
import { Flex, Text, Button } from 'rebass';

interface Submit {
  sum: string,
  onSubmit: () => void
  label: string
}

const Submit: React.FC<Submit> = ({ sum, onSubmit, label }) => (
  <Flex
    py='32px'
    px='32px'
    alignItems='center'
    sx={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <Text color={'var(--text-color)'}>{`Total: ${sum}`}</Text>
    <Button
      onClick={onSubmit}
      ml='auto'
      bg='transparent'
      sx={{
        cursor: 'pointer',
        border: '1px solid',
        color: ' var(--text-color)',
        borderColor: ' var(--text-color)',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: 'var(--color-active)',
          opacity: 1,
          borderColor: 'var(--color-active)',
          color: 'var(--text-color-secondary)',
        },
      }}
    >{label}</Button>
  </Flex>
);

export default Submit;
