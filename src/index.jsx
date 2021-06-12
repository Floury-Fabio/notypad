import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'redux/store';
import App from './App';
import 'styles/index.scss';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (window.Cypress) {
  window.store = store;
}
