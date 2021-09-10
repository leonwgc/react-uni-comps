import React, { useState, useref, useRef } from 'react';
import { NumberKeyboard, Button, Toast } from '../src';

export default function App() {
  const [v, setV] = useState('');
  const ref = useRef();
  return (
    <div className="app">
      <NumberKeyboard onClick={(k) => Toast.show(k, 200)} />

      <NumberKeyboard type="id" onClick={(k) => Toast.show(k, 200)} />
    </div>
  );
}
