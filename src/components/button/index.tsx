import React from 'react';
import { Button } from 'rebass';

interface SubmitButton {
  disabled?: boolean,
  onSubmit: () => void
  label: string
}

const SubmitButton: React.FC<SubmitButton> = ({ onSubmit, label, disabled = false }) => (
  <Button
    disabled={disabled}
    onClick={onSubmit}
    bg='transparent'
    sx={{
      opacity: disabled ? 0.4 : 1,
      cursor: 'pointer',
      border: '1px solid',
      color: ' var(--text-color)',
      borderColor: ' var(--text-color)',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: 'var(--color-active)',
        opacity: 1,
        borderColor: 'var(--color-active)',
        color: 'var(--text-color-secondary)',
      },
    }}
  >{label}</Button>
);

export default SubmitButton;
