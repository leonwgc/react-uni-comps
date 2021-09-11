import React, { useState, useref, useRef } from 'react';
import { NumberKeyboardPicker, Button, Toast, PasswordInput, Popup } from '../src';

export default function App() {
  const [v, setV] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <div className="app">
      <PasswordInput
        style={{ marginTop: 30 }}
        onFinish={() => {
          Toast.show('输入完成:' + v);
          setVisible(false);
          console.log('PasswordInput:' + v);
        }}
        mask={false}
        value={v}
        onChange={setV}
        onFocus={() => setVisible(true)}
      />

      <NumberKeyboardPicker
        onClose={() => setVisible(false)}
        visible={visible}
        onChange={(value) => {
          Toast.show(value, 200);
          setV(value);
        }}
      />
    </div>
  );
}
