import React from 'react';
import { Flex, Box } from 'rebass';

import { ReactComponent as NextPic } from 'assets/icons/buttons/next/next.svg';

interface Steps {
  active: string,
  steps: string[]
}

const Steps: React.FC<Steps> = ({ active, steps }) => (
  <Flex alignItems='center'>
    {
      steps.map((step, index) => (
        <>
          {Boolean(index) && <NextPic width={'18px'} height='18px' fillOpacity={1} fill={ index <= steps.indexOf(active) ? 'var(--color-active)' : 'var(--text-color)'} />}
          <Box
            key={index}
            flex='1 1 0px'
            color={index <= steps.indexOf(active) ? 'var(--color-active)' : 'var(--text-color)'}
            sx={{
              position: 'relative',
              textAlign: 'center',
            }}
          >
            {step}
          </Box>
        </>
      ))
    }
  </Flex>
);

export default Steps;
