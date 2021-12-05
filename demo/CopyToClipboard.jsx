import React, { useState } from 'react';
import { CopyToClipboard, Button, Space, Toast, AlertDialog } from 'react-uni-comps';

export default function App() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="app">
      <Space direction="vertical" size={20}>
        <CopyToClipboard text="hello">
          <Button>hello</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hi" onCopy={() => AlertDialog.show(null, 'copied')}>
          <Button>hi</Button>
        </CopyToClipboard>

        <CopyToClipboard text={value.toString()} onCopy={() => Toast.show(value.toLocaleString())}>
          <Button>{value.toLocaleDateString()}</Button>
        </CopyToClipboard>

        <CopyToClipboard text="hello">
          <Button onClick={() => Toast.show('hello')}>hello</Button>
        </CopyToClipboard>
      </Space>
    </div>
  );
}
