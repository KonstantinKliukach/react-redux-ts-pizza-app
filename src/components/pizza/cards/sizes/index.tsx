import React from 'react';
import { Flex } from 'rebass';

interface Sizes {
  onClick: (num: string) => void,
  sizeSelected: string,
  sizes: string[],
}

interface Size {
  onClick: Sizes['onClick'],
  size: string,
  active: boolean,
}

const Size: React.FC<Size> = ({ active, size, onClick }) => {
  const handleClick = () => {
    if (!active) {
      onClick(size);
    }
  };
  return (
    <Flex
      onClick={handleClick}
      alignItems='center'
      justifyContent='center'
      height='32px'
      width='32px'
      mr='4px'
      sx={{
        cursor: 'pointer',
        border: '1px solid',
        color: active ? 'var(--color-active)' : ' var(--text-color)',
        borderColor: active ? 'var(--color-active)' : ' var(--text-color)',
        borderRadius: '4px',
        opacity: active ? 1 : 0.4,
        '&:hover': {
          backgroundColor: 'var(--color-active)',
          opacity: 1,
          borderColor: 'var(--color-active)',
          color: 'var(--text-color-secondary)',
        },
      }}
    >
      {size}
    </Flex>
  );
};

const Sizes: React.FC<Sizes> = ({ sizeSelected, sizes, onClick }) => (
  <Flex alignItems='center'>
    {
      sizes.map((size, i) => <Size
        active={sizeSelected === size}
        key={i} size={size}
        onClick={onClick}
      />)
    }
  </Flex>
);

export default Sizes;
