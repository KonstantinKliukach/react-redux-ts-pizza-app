import React from 'react';
import { Box } from 'rebass';

import { ReactComponent as MoonPic } from 'assets/icons/moon/moon.svg';
import { ReactComponent as SunPic } from 'assets/icons/sun/sun.svg';
import { getThemeState, Theme } from 'context/redux/reducers/theme';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from 'context/redux/actions/theme';

const ThemeSwitcher: React.FC = () => {
  const { theme } = useSelector(getThemeState);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    const nextTheme = theme === Theme.light ? Theme.dark : Theme.light;
    dispatch(setTheme(nextTheme));
  };

  return (
    <Box onClick={handleThemeSwitch} sx={{ cursor: 'pointer' }} ml='12px'>
      {
        theme === Theme.light
          ? <MoonPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
          : <SunPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
      }
    </Box>
  );
};

export default ThemeSwitcher;
