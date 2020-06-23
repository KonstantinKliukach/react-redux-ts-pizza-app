import { Reducer } from 'redux';
import { RootState } from 'context/redux/store';
import {
  AuthActions,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT,
} from 'context/redux/actions/auth';

export interface User {
  name: string,
  email: string,
  phone: string,
  address: string,
}

interface UserState {
  isAuthed : boolean,
  user: User | null,
}

const initialState: UserState = {
  isAuthed: false,
  user: null,
};

export const getAuthState = (rootState: RootState): UserState => (rootState.auth);

const reducer: Reducer<
  UserState, AuthActions
> = (state = initialState, action: AuthActions): UserState => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        isAuthed: true,
        user,
      };
    }
    case LOGOUT: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default reducer;
