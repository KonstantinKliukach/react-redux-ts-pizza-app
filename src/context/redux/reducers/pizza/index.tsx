import { Reducer } from 'react';
import { PizzaActions, PIZZA_SUCCESS, PIZZA_REQUEST } from 'context/redux/actions/pizza';
import { RootState } from 'context/redux/store';

interface Prices {
  'dollar': number
  'euro': number
}

export interface Pizza {
  id: number,
  title: string,
  image: string,
  description: string,
  vegan: boolean,
  hot: boolean,
  prices: {[key: string]: Prices},
}

export interface Pizzas {
  [key: number]: Pizza
}

interface PizzaState {
  pizzas: Pizzas | null,
  isLoading: boolean,
}

const initialState: PizzaState = {
  pizzas: null,
  isLoading: true,
};

export const getPizzaState = (rootState: RootState): PizzaState => (rootState.pizza);

const reducer: Reducer<
  PizzaState, PizzaActions
> = (state = initialState, action: PizzaActions): PizzaState => {
  switch (action.type) {
    case PIZZA_SUCCESS: {
      const { pizzas } = action.payload;
      return {
        ...state,
        isLoading: false,
        pizzas,
      };
    }
    case PIZZA_REQUEST: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default reducer;
