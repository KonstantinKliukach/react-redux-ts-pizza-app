import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'context/redux/store';
import { Pizza } from 'context/redux/reducers/pizza';

export const PIZZA_REQUEST = 'PIZZA_REQUEST';
export const PIZZA_SUCCESS = 'PIZZA_SUCCESS';
export const PIZZA_FAILURE = 'PIZZA_FAILURE';

export type PizzaRequestAction = Action<typeof PIZZA_REQUEST>

export interface PizzaSuccessAction extends Action<typeof PIZZA_SUCCESS> {
  payload: {
    pizzas: Pizza[],
  }
}

export interface PizzaFailureAction extends Action<typeof PIZZA_FAILURE> {
  payload: {
    message: string,
  }
}

export type PizzaActions = PizzaRequestAction | PizzaSuccessAction | PizzaFailureAction;

export const loadPizzas = (): ThunkAction<
void,
RootState,
undefined,
PizzaActions
> => async (dispatch) => {
  dispatch({
    type: PIZZA_REQUEST,
  });
  try {
    const response = await fetch('http://localhost:3001/pizzas');
    const pizzas: Pizza[] = await response.json();
    dispatch({
      type: PIZZA_SUCCESS,
      payload: { pizzas },
    });
  } catch (error) {
    dispatch({
      type: PIZZA_FAILURE,
      payload: { message: 'Failed to load menu' },
    });
  }
};
