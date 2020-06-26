import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Label,
  Input,
} from '@rebass/forms';

import { Box } from 'rebass';

interface Field {
  name: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Field: React.FC<Field> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <Box mb='24px'>
      <Label mb='12px' htmlFor={name}>{label}</Label>
      <Input
        sx={{
          borderRadius: '4px',
        }}
        id={name}
        name='name'
        {...rest}
      />
    </Box>
  );
};

export default Field;
