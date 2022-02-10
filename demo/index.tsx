import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore } from 'simple-redux-store';

import App from './App';

const initialState = { theme: '#005cff' };
const store = configureStore(initialState, true);

// import VConsole from 'vconsole';

// const vConsole = new VConsole();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
