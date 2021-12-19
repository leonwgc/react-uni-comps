import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { PasswordInput, Button, Toast } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState('');
  const ref = useRef();
  return (
    <PageWrap>
      <PasswordInput
        style={{ marginTop: 30 }}
        mask={false}
        value={v}
        length={6}
        onChange={setV}
        onFinish={(v) => {
          Toast.show({ content: v });
          console.log(v);
        }}
        ref={ref}
      />

      <PasswordInput
        virtualKeyboard={false}
        style={{ marginTop: 30 }}
        value={v}
        length={6}
        onChange={setV}
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
    </PageWrap>
  );
}
