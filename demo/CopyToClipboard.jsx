import React, { useState } from 'react';
import { CopyToClipboard, Space, Button } from '../src';

export default function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="app">
      <Space wrap>
        <CopyToClipboard text="hello">
          <Button>hello</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hi" onCopy={() => alert('copied')}>
          <Button>hi</Button>
        </CopyToClipboard>

        <CopyToClipboard text={value.toString()} onCopy={() => setValue(new Date())}>
          <Button>{value.toString()}</Button>
        </CopyToClipboard>
      </Space>
    </div>
  );
}
