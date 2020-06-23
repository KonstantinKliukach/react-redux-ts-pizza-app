import { Action } from 'redux';
import { User } from 'context/redux/reducers/auth';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'context/redux/store';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGOUT = 'LOGOUT';

export type AuthRequestAction = Action<typeof AUTH_REQUEST>

export type LogoutAction = Action<typeof LOGOUT>

export interface AuthSuccessAction extends Action<typeof AUTH_SUCCESS> {
  payload: {
    user: User,
  }
}

export interface AuthFailureAction extends Action<typeof AUTH_FAILURE> {
  payload: {
    message: string,
  }
}

export type AuthActions = AuthRequestAction | AuthSuccessAction | AuthFailureAction | LogoutAction;

export const auth = (): ThunkAction<
Promise<void>,
RootState,
undefined,
AuthActions
> => async (dispatch, data) => {
  dispatch({
    type: AUTH_REQUEST,
  });
  try {
    const response = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    }
    );
    if (response.ok) {
      const user: User = await response.json();
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          user,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: {
        message: error,
      },
    });
  }
};
