import React, { useState, useref, useRef } from 'react';
import { PasswordInput, Button, Toast } from '../src';

export default function App() {
  const [v, setV] = useState('');
  const ref = useRef();
  return (
    <div className="app">
      <PasswordInput
        style={{ marginTop: 30 }}
        mask={false}
        value={v}
        length={6}
        onChange={setV}
        onFinish={(v) => {
          Toast.show(v);
          console.log(v);
        }}
        ref={ref}
      />

      <PasswordInput style={{ marginTop: 30 }} value={v} length={6} onChange={setV} />

      <div style={{ margin: 20 }}>
        <Button
          block
          danger
          onClick={() => {
            setV('');
            ref.current.focus();
          }}
        >
          清空
        </Button>

        <Button
          block
          type="primary"
          style={{ marginTop: 30 }}
          onClick={() => {
            setV('123');
            ref.current.focus();
          }}
        >
          设置值
        </Button>
      </div>
    </div>
  );
}
