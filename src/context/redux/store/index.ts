import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import themeReducer from 'context/redux/reducers/theme';
import authReducer from 'context/redux/reducers/auth';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
