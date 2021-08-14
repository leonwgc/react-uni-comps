import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  container ? container.querySelector('#root') : document.querySelector('#root')
);
