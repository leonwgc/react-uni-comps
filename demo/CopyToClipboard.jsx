import React, { useState } from 'react';
import { CopyToClipboard, Button, Space, Toast, AlertDialog } from '../src';

export default function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="app">
      <Space direction="vertical" size={20} style={{ margin: 20 }}>
        <CopyToClipboard text="hello">
          <Button block>hello</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hi" onCopy={() => AlertDialog.show(null, 'copied')}>
          <Button block>hi</Button>
        </CopyToClipboard>

        <CopyToClipboard text={value.toString()} onCopy={() => Toast.show(value.toLocaleString())}>
          <Button block>{value.toString()}</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hello">
          <Button block onClick={() => Toast.show('hello')}>
            hello
          </Button>
        </CopyToClipboard>
      </Space>
    </div>
  );
}
