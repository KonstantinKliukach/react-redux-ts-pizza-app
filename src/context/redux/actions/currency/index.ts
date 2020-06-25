import { Action } from 'redux';
import { Currency } from 'context/redux/reducers/currency';

export const SET_CURRENCY = 'SET_CURRENCY';

export interface SetCurrencyAction extends Action<typeof SET_CURRENCY> {
  payload: Currency
}

export const setCurrency = (currency: Currency): SetCurrencyAction => ({
  type: SET_CURRENCY,
  payload: currency,
});
