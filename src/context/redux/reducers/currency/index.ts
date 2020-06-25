import { Reducer } from 'redux';
import { RootState } from 'context/redux/store';
import { SetCurrencyAction, SET_CURRENCY } from 'context/redux/actions/currency';

export enum Currency {
  euro = 'euro',
  dollar = 'dollar'
}

interface CurrencyState {
  currency: Currency
}

const initialState: CurrencyState = {
  currency: Currency.euro,
};

export const getCurrencyState = (rootState: RootState): CurrencyState => (rootState.currency);

const reducer: Reducer<
  CurrencyState, SetCurrencyAction
> = (state = initialState, action: SetCurrencyAction): CurrencyState => {
  switch (action.type) {
    case SET_CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
