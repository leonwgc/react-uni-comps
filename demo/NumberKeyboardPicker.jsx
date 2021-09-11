import React, { useState, useref, useRef, useEffect } from 'react';
import { NumberKeyboardPicker, Button, Toast, PasswordInput, Popup } from '../src';

export default function App() {
  const [v, setV] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="app">
      <PasswordInput
        style={{ marginTop: 30 }}
        onFinish={() => {
          setVisible(false);
          console.log('PasswordInput:' + v);
          setTimeout(() => {
            Toast.show('输入完成:' + v, 2000);
          }, 500);
        }}
        mask={false}
        value={v}
        onChange={setV}
        // onFocus={() => setVisible(true)}
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
