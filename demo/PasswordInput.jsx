import React from 'react';
import { PasswordInput } from '../src';

export default function App() {
  return (
    <div className="app">
      <PasswordInput
        style={{ marginTop: 30, display: 'flex' }}
        length={6}
        onFinish={(v) => console.log(v)}
      />

      <PasswordInput style={{ marginTop: 30 }} length={6} onFinish={(v) => console.log(v)} />

      <PasswordInput
        style={{ marginTop: 30 }}
        mask={false}
        length={6}
        onFinish={(v) => console.log(v)}
      />

      <PasswordInput
        style={{ marginTop: 30 }}
        mask={false}
        value="123"
        length={6}
        onFinish={(v) => console.log(v)}
        closable
      />

      <PasswordInput
        style={{ marginTop: 30 }}
        autoFocus={false}
        length={4}
        onFinish={(v) => console.log(v)}
      />
    </div>
  );
}
