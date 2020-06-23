import { SetThemeAction, SET_THEME } from 'context/redux/actions/theme';
import { Reducer } from 'redux';
import { RootState } from 'context/redux/store';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: Theme.light,
};

export const getThemeState = (rootState: RootState): ThemeState => (rootState.theme);

const reducer: Reducer<
  ThemeState, SetThemeAction
> = (state = initialState, action: SetThemeAction): ThemeState => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
