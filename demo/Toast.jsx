import React, { useState } from 'react';
import { Spinner, Space, Toast, Button } from '../src';

export default function App() {
  const [v, setV] = useState(false);
  return (
    <div className="app">
      <Toast content="中华人民共和国" visible={v} />

      <Space direction="vertical" size={50}>
        <Button type="primary" onClick={() => Toast.show('中华人民共和国')}>
          Toast.show
        </Button>

        <Button type="primary" onClick={() => Toast.show('hello,world', 1000)}>
          Toast.show 1s
        </Button>

        <Button onClick={() => setV((v) => !v)}>Toast comp toggle</Button>
      </Space>
    </div>
  );
}
