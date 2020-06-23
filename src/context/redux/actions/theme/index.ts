import { Action } from 'redux';
import { Theme } from 'context/redux/reducers/theme';

export const SET_THEME = 'SET_THEME';

export interface SetThemeAction extends Action<typeof SET_THEME> {
  payload: Theme
}

export const setTheme = (theme: Theme): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});
