import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducers from './reducers/rootReducer';

// ---Redux DevTools
const composeEnhancers =
  (typeof window != 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
