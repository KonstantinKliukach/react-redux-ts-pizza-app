import React from 'react';
import { Box, Text, Flex } from 'rebass';
import { useSelector, useDispatch } from 'react-redux';
import { getCartState } from 'context/redux/reducers/cart';
import { getPizzaState } from 'context/redux/reducers/pizza';

import { ReactComponent as PlusPic } from 'assets/icons/buttons/plus/plus.svg';
import { ReactComponent as MinusPic } from 'assets/icons/buttons/minus/minus.svg';
import { addToCart, deleteFromCart } from 'context/redux/actions/cart';

const Confirmation: React.FC = () => {
  const { cart } = useSelector(getCartState);
  const { pizzas } = useSelector(getPizzaState);

  const dispatch = useDispatch();

  const ids = Object.keys(cart);

  if (!ids.length) {
    return <Flex color={'var(--text-color)'} flex={1} alignItems='center' justifyContent='center'>Your cart is empty</Flex>;
  }

  const handleIncrease = (id: number, size: number): void => {
    dispatch(addToCart({
      id,
      size,
    }));
  };

  const handleDecrease = (id: number, size: number): void => {
    dispatch(deleteFromCart({
      id,
      size,
    }));
  };

  return (
    <Box flex={1} px='20px' pt='20px'>
      {
        ids.map((id) => (
          <Box key={id} my='24px'>
            <Text color={'var(--text-color)'}>
              {
                pizzas && pizzas[Number(id)].title
              }
            </Text>
            {
              (Object.keys(cart[Number(id)]).map((size, i) => (
                <Flex key={i} justifyContent='space-between' alignItems='center' pt='8px'>
                  <Text color={'var(--text-color)'} opacity={0.6}>
                    {
                      `Size: ${size}cm.`
                    }
                  </Text>
                  <Text color={'var(--text-color)'}>
                    {
                      <Flex justifyContent='center' sx={{
                        svg: {
                          cursor: 'pointer',
                          '&:hover': {
                            fill: 'var(--color-active)',
                          },
                        },
                      }}>
                        <MinusPic
                          width={'16px'}
                          height='16px'
                          fillOpacity={1}
                          fill={'var(--text-color)'}
                          onClick={() => handleDecrease(Number(id), Number(size))}
                        />
                          <Text mx='24px'>
                            {cart[Number(id)][Number(size)]}
                          </Text>
                        <PlusPic
                          width={'16px'}
                          height='16px'
                          fillOpacity={1}
                          fill={'var(--text-color)'}
                          onClick={() => handleIncrease(Number(id), Number(size))}
                        />
                      </Flex>
                    }
                  </Text>
                </Flex>
              )))
            }
          </Box>
        ))
      }
    </Box>
  );
};

export default Confirmation;
