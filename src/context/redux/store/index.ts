import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import themeReducer from 'context/redux/reducers/theme';
import authReducer from 'context/redux/reducers/auth';
import pizzaReducer from 'context/redux/reducers/pizza';
import currencyReducer from 'context/redux/reducers/currency';
import cartReducer from 'context/redux/reducers/cart';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  pizza: pizzaReducer,
  currency: currencyReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
