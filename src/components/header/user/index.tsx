import React from 'react';
import { Flex, Text } from 'rebass';
import { getAuthState } from 'context/redux/reducers/auth';
import { useSelector } from 'react-redux';

import { ReactComponent as UserPic } from 'assets/icons/user/user.svg';

const User: React.FC = () => {
  const { isAuthed, user } = useSelector(getAuthState);
  return (
    <Flex
      alignItems='center'
      sx={{
        cursor: 'pointer',
        '&:hover': {
          color: 'var(--color-active)',
          svg: {
            fill: 'var(--color-active)',
          },
        },
      }}
    >
      <UserPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
      <Text fontSize='18px' ml='8px' fontWeight='bold'>
        {isAuthed && user ? user.email : 'LogIn'}
      </Text>
    </Flex>
  );
};

export default User;
