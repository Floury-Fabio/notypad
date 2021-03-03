import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), // eslint-disable-line max-len, no-underscore-dangle
);

store.subscribe(() => console.log(store.getState())); // eslint-disable-line no-console

export default store;
