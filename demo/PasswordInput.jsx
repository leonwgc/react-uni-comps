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
        onFinish={(v) => Toast.show(v)}
        ref={ref}
      />

      <PasswordInput
        style={{ marginTop: 30 }}
        value={v}
        length={6}
        onChange={setV}
        onFinish={(v) => Toast.show(v)}
      />

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
      </div>
    </div>
  );
}
