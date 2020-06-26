import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'context/redux/store';
import { Pizza, Pizzas } from 'context/redux/reducers/pizza';

export const PIZZA_REQUEST = 'PIZZA_REQUEST';
export const PIZZA_SUCCESS = 'PIZZA_SUCCESS';
export const PIZZA_FAILURE = 'PIZZA_FAILURE';

export type PizzaRequestAction = Action<typeof PIZZA_REQUEST>

export interface PizzaSuccessAction extends Action<typeof PIZZA_SUCCESS> {
  payload: {
    pizzas: Pizzas,
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
    const pizzasRaw: Pizza[] = await response.json();
    const pizzas: Pizzas = {};
    // eslint-disable-next-line no-return-assign
    pizzasRaw.forEach((pizza) => pizzas[pizza.id] = pizza);
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
