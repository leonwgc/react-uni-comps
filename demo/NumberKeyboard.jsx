import React from 'react';
import { NumberKeyboard, Toast } from '../src';

export default function App() {
  return (
    <div className="app">
      <NumberKeyboard onClick={(k) => Toast.show(k, 200)} />
    </div>
  );
}
