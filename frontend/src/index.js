import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Home from './pages/Home';

import store from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);