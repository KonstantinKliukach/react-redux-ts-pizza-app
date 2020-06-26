import React, { useState, useEffect } from 'react';

import { ReactComponent as CartPic } from 'assets/icons/cart/cart.svg';
import { getCartState } from 'context/redux/reducers/cart';
import { useSelector } from 'react-redux';
import { Flex, Box, Text } from 'rebass';
import { getPizzaState } from 'context/redux/reducers/pizza';
import { getCurrencyState, Currency } from 'context/redux/reducers/currency';
import CartModal from './modal';

const Cart: React.FC = () => {
  const { total, cart } = useSelector(getCartState);
  const { pizzas } = useSelector(getPizzaState);
  const { currency } = useSelector(getCurrencyState);

  const [sum, setSum] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const calculateSum = () => {
    if (!pizzas || !total) {
      return 0;
    }
    let newSum = 0;
    const ids = Object.keys(cart);
    ids.forEach((id) => {
      const prices = pizzas[Number(id)].prices;
      const sizes = Object.keys(cart[Number(id)]);
      sizes.forEach((size) => {
        newSum += prices[size][currency] * cart[Number(id)][Number(size)];
      });
    });
    return Math.round((newSum + Number.EPSILON) * 100) / 100;
  };

  useEffect(() => {
    setSum(calculateSum());
  }, [total, currency]);

  const sumWithCurrency = `${sum} ${currency === Currency.dollar ? '$' : '€'}`;

  const handleModalClose = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <CartModal sum={sumWithCurrency} handleClose={handleModalClose} isOpen={isModalOpened} />
      <Flex alignItems='center' onClick={handleModalOpen}>
        <Box pr='11px' sx={{ borderRight: '1px solid var(--color-secondary)' }}>
          <CartPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
        </Box>
        <Flex pl='11px' fontSize='12px'sx={{ fontWeight: 'bold' }} justifyContent='space-between' flexDirection='column'>
          <Text>{sumWithCurrency}</Text>
          <Text>{`${total} pc.`}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Cart;
