import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { PasswordInput, Button, Toast, Space } from 'react-uni-comps';
import DemoBlock from './common/DemoBlock';
import { RefType } from 'react-uni-comps/es/PasswordInput';

export default function App() {
  const [v, setV] = useState('');
  const ref = useRef<RefType>();
  return (
    <PageWrap>
      <DemoBlock>
        <Space direction="vertical" size={30} style={{ display: 'flex' }}>
          <PasswordInput
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

          <PasswordInput value={v} length={6} onChange={setV} />
        </Space>

        <Space style={{ margin: 20, justifyContent: 'flex-end', display: 'flex' }}>
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
            onClick={() => {
              setV('123');
              ref.current.focus();
            }}
          >
            设置值
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
