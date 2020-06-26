import { Reducer } from 'react';
import { CartActions, ADD_TO_CART, DELETE_FROM_CART, CartPayload, CLEAR_CART } from 'context/redux/actions/cart';
import { RootState } from 'context/redux/store';

type quantity = number;

export interface CartState {
  cart: {[id: number]: {
    [size: number]: quantity
  }},
  total: number,
}

const initialState: CartState = {
  cart: {},
  total: 0,
};

export const getCartState = (rootState: RootState): CartState => (rootState.cart);

function addToCart(item: CartPayload, state: CartState): CartState {
  const newState: CartState = { ...state, total: state.total + 1 };
  if (newState.cart[item.id]) {
    if (newState.cart[item.id][item.size]) {
      newState.cart[item.id][item.size] += 1;
    } else {
      newState.cart[item.id][item.size] = 1;
    }
  } else {
    newState.cart[item.id] = {
      [item.size]: 1,
    };
  }
  return newState;
}

function deleteFromCart(item: CartPayload, state: CartState): CartState {
  const newState: CartState = { ...state, total: state.total - 1 };
  newState.cart[item.id][item.size] -= 1;
  if (!newState.cart[item.id][item.size]) {
    delete newState.cart[item.id][item.size];
  }
  if (!Object.keys(newState.cart[item.id]).length) {
    delete newState.cart[item.id];
  }
  return newState;
}

const reducer: Reducer<
  CartState, CartActions
> = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      return addToCart(action.payload, state);
    }
    case DELETE_FROM_CART: {
      return deleteFromCart(action.payload, state);
    }
    case CLEAR_CART: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default reducer;
