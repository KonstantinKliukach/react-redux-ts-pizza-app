import { Action } from 'redux';

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export interface CartPayload {
  id: number,
  size: number,
}

export interface AddToCartActionAction extends Action<typeof ADD_TO_CART> {
  payload: CartPayload
}
export interface DeleteFromCartActionAction extends Action<typeof DELETE_FROM_CART> {
  payload: CartPayload
}

export type CartActions = AddToCartActionAction | DeleteFromCartActionAction;

export const addToCart = (payload: CartPayload): AddToCartActionAction => ({
  type: ADD_TO_CART,
  payload,
});

export const deleteFromCart = (payload: CartPayload): DeleteFromCartActionAction => ({
  type: DELETE_FROM_CART,
  payload,
});
