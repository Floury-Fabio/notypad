import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  ? compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // eslint-disable-line max-len, no-underscore-dangle
  : compose(applyMiddleware(thunkMiddleware));

const store = createStore(
  rootReducer,
  composeSetup,
);

store.subscribe(() => console.log(store.getState())); // eslint-disable-line no-console

export default store;
