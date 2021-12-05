import React, { useState, useEffect } from 'react';
import { NumberKeyboard, Toast, PasswordInput } from 'react-uni-comps';

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
            Toast.show({ content: '输入完成:' + v });
          }, 500);
        }}
        mask={false}
        value={v}
        onChange={setV}
        // onFocus={() => setVisible(true)}
      />

      <NumberKeyboard
        customKey="."
        onClose={() => setVisible(false)}
        okText="Ok"
        visible={visible}
        onChange={(value) => {
          Toast.show({ content: value, duration: 200 });
          setV(value);
        }}
      />
    </div>
  );
}
