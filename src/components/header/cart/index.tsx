import React from 'react';

import { ReactComponent as CartPic } from 'assets/icons/cart/cart.svg';

const Cart: React.FC = () => {
  return (
    <CartPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
  );
};

export default Cart;
