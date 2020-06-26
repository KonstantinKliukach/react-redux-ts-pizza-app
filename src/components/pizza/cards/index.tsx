import React, { useState } from 'react';
import { Pizza } from 'context/redux/reducers/pizza';
import { Box, Image, Text, Flex, Button } from 'rebass';

import { ReactComponent as ReactHot } from 'assets/icons/card/hot.svg';
import { ReactComponent as ReactVegan } from 'assets/icons/card/vegan.svg';
import { getCurrencyState, Currency } from 'context/redux/reducers/currency';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from 'context/redux/actions/cart';
import Sizes from './sizes';

interface Card {
  pizza: Pizza
}

const Card:React.FC<Card> = ({ pizza }) => {
  const sizes = Object.keys(pizza.prices);
  const [size, setSize] = useState((sizes[0]));

  const dispatch = useDispatch();

  const { currency } = useSelector(getCurrencyState);

  const handleSizeSelect = (sizeSelected: string): void => {
    setSize(sizeSelected);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: pizza.id,
      size: Number(size),
    }));
  };

  const price = `${pizza.prices[size][currency]} ${currency === Currency.dollar ? '$' : '€'}`;
  return (
    <Flex
      flexDirection='column'
      m='12px'
      p='12px'
      sx={{
        backgroundColor: 'var(--color-secondary)',
        borderRadius: '12px',
        width: '30%',
      }}
    >
      <Box backgroundColor='white' sx={{ borderRadius: '12px 12px 0px 0px' }}>
        <Image
          width={'100%'}
          maxHeight='180px'
          src={pizza.image}
          sx={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Flex alignItems='center' justifyContent='space-between' mt='18px'>
        <Text fontWeight='bold' py='6px'>{pizza.title}</Text>
        {
          (pizza.hot || pizza.vegan)
            && <Flex alignItems='center'>
                {
                  pizza.hot && <ReactHot width={'30px'} height='30px' fillOpacity={1} fill={'red'} />
                }
                {
                  pizza.vegan && <ReactVegan width={'30px'} height='30px' fillOpacity={1} fill={'green'} />
                }
              </Flex>
        }
      </Flex>
      <Flex flexDirection='column' justifyContent='space-between' flex='1'>
        <Text opacity={0.8} my='12px'>{pizza.description}</Text>
        <Box>
          <Text>Price: {price}</Text>
          <Flex justifyContent='space-between' alignItems='center' mt='12px'>
            <Sizes onClick={handleSizeSelect} sizeSelected={size} sizes={sizes}/>
            <Button
              onClick={handleAddToCart}
              ml='auto'
              backgroundColor='var(--color-active)'
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'var(--color-hover)',
                },
              }}
            >ADD</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Card;
