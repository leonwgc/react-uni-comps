import React, { useState } from 'react';
// import { Space } from 'antd';
import { CopyToClipboard, Button, Space } from '../src';

export default function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="app">
      <Space direction="vertical" size={30} style={{ width: '100%' }}>
        <CopyToClipboard text="hello">
          <Button block>hello</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hi" onCopy={() => alert('copied')}>
          <Button block>hi</Button>
        </CopyToClipboard>

        <CopyToClipboard text={value.toString()} onCopy={() => setValue(new Date())}>
          <Button block>{value.toString()}</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hello">
          <Button block onClick={() => console.log('hello')}>
            hello
          </Button>
        </CopyToClipboard>
      </Space>
    </div>
  );
}
