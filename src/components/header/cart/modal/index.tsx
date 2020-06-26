import React, { useState } from 'react';
import { Flex } from 'rebass';

import Modal from 'components/modal';
import Steps from './steps';
import Submit from './submit';
import Confirmation from './confirmation';

interface CartModal {
  sum: string,
  isOpen: boolean,
  handleClose: () => void
}

const steps = ['Confirmation', 'Delivery', 'Review'];

const CartModal: React.FC<CartModal> = ({ sum, isOpen, handleClose }) => {
  const [stage, setStage] = useState(steps[0]);

  const handleNext = () => {
    const nextStage = steps.indexOf(stage) + 1;
    if (!nextStage) {
      return;
    }
    if (nextStage < steps.length) {
      setStage(steps[nextStage]);
      return;
    }
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
        <Steps active={stage} steps={steps}/>
        <Confirmation />
        <Submit
          onSubmit={handleNext}
          sum={sum}
          label={
            steps.length === steps.indexOf(stage) + 1 ? 'Submit' : 'Next'
          }
        />
      </Flex>
    </Modal>
  );
};

export default CartModal;
