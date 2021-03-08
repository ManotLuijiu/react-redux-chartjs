import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import Logger from 'redux-logger';

import reducer from './reducer';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

// function initStore(initialState) {
//   return createStore(
//     reducers,
//     initialState,
//     composeEnhancers(applyMiddleware(thunkMiddleware), Logger)
//   );
// }
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, Logger))
);

export default store;
