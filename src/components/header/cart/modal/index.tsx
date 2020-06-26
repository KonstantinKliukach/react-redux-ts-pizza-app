import React from 'react';
import { Flex } from 'rebass';

import Modal from 'components/modal';
import { useHistory } from 'react-router-dom';
import Submit from './submit';
import Confirmation from './confirmation';

interface CartModal {
  sum: string,
  isOpen: boolean,
  handleClose: () => void
}

const CartModal: React.FC<CartModal> = ({ sum, isOpen, handleClose }) => {
  const history = useHistory();
  const handleNext = () => {
    history.push('/order');
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Flex
        flexDirection='column'
        width="550px"
        px='16px'
        pt='34px'
        pb='120px'
        minHeight='550px'
        backgroundColor="var(--color-secondary)"
        sx={{
          borderRadius: '12px',
          position: 'relative',
        }}
      >
        <Confirmation />
        <Submit
          onSubmit={handleNext}
          sum={sum}
          label={'Next'}
        />
      </Flex>
    </Modal>
  );
};

export default CartModal;
