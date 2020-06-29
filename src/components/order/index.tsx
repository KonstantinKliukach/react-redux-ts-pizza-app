import React, { useState } from 'react';

import { Flex, Box } from 'rebass';
import SubmitButton from 'components/button';
import { getCartState } from 'context/redux/reducers/cart';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from 'context/redux/actions/cart';
import { useHistory } from 'react-router-dom';
import Field from './field';

interface Order {
  id: number
}

const Order: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const { cart } = useSelector(getCartState);

  const dispatch = useDispatch();

  const history = useHistory();

  const isCartNotEmpty = Object.keys(cart).length;

  const disabled = !(name && address && phone && isCartNotEmpty);

  const handleSubmit = async () => {
    const data = {
      user: {
        name,
        address,
        phone,
      },
      cart,
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      }
      );
      if (response.ok) {
        const order: Order = await response.json();
        dispatch(clearCart());
        history.push(`/success/${order.id}`);
      }
    } catch (error) {

    }
  };

  return (
      <Flex
        flexDirection='column'
        flex={1}
        alignItems='center'
      >
        <Box width={1 / 2} px={2}>
          <Field value={name} name='name' label='Name' onChange={(e) => setName(e.target.value)} />
          <Field value={address} name='address' label='Address' onChange={(e) => setAddress(e.target.value)} />
          <Field value={phone} name='phone' label='Phone' onChange={(e) => setPhone(e.target.value)} />
        </Box>
        <SubmitButton disabled={disabled} label={'Submit'} onSubmit={handleSubmit} />
      </Flex>
  );
};

export default Order;
