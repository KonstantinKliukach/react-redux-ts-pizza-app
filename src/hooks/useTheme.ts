import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { getThemeState, Theme } from 'context/redux/reducers/theme';

const preferDarkSchema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultTheme = preferDarkSchema ? 'dark' : 'light';

interface ThemeHook {
  theme: Theme,
}

function useTheme(): ThemeHook {
  const { theme } = useSelector(getThemeState);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme };
}

export default useTheme;
