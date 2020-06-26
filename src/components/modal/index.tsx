import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Flex } from 'rebass';

import { ReactComponent as ClosePic } from 'assets/icons/buttons/close/close.svg';

interface IModal {
  alignItems?: string,
  isOpen: boolean,
  handleClose: (() => void),
}

const Modal: React.FC<IModal> = ({ alignItems, children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  const root = document.getElementById('modal-root');
  if (root) {
    return ReactDOM.createPortal(
      <Flex
        pt="100px"
        pb="300px"
        justifyContent="center"
        onClick={handleClose}
        alignItems={alignItems}
        sx={{
          bg: 'rgba(0, 0, 0, 0.7)',
          minHeight: '100vh',
          position: 'fixed',
          opacity: '1',
          zIndex: '9999',
          top: '0',
          left: '0',
          width: '100%',
          maxHeight: '100%',
          overflowY: 'scroll',
          animation: 'show .3s ease',
          '@keyframes show': {
            '0%': {
              display: 'none',
              opacity: 0,
            },
            '1%': {
              display: 'flex',
              opacity: 0,
            },
            '100%': {
              opacity: 1,
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {
            <Box
              sx={{
                zIndex: '999',
                position: 'absolute',
                top: '17px',
                right: '16px',
                cursor: 'pointer',
                svg: {
                  cursor: 'pointer',
                  '&:hover': {
                    fill: 'var(--color-active)',
                  },
                },
              }}
              onClick={handleClose}
            >
              <ClosePic width={'20px'} height='20px' fillOpacity={1} fill={'var(--text-color)'} />
            </Box>
          }
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              marginBottom: '100px',
            }}
          >
            {children}
          </Box>
        </Box>
      </Flex>,
      root
    );
  }
  return null;
};

export default Modal;
