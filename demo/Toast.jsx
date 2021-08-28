import React, { useState } from 'react';
import { Spinner, Space, Toast, Button, Checkbox } from '../src';

export default function App() {
  const [v, setV] = useState(false);
  return (
    <div className="app">
      <Toast content="中华人民共和国" visible={v} />

      <Space direction="vertical" size={50}>
        <Button
          type="primary"
          onClick={() =>
            Toast.show(
              <Space>
                <Spinner color="rgba(255,255,255,.5)" /> 加载中
              </Space>
            )
          }
        >
          Toast.show loading
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show(
              <Space direction="vertical" size={16}>
                <Checkbox size={40} borderRadius="50%" color="#e4e4e4" checked></Checkbox> 认证成功
              </Space>
            )
          }
        >
          Toast.show checked
        </Button>

        <Button type="primary" onClick={() => Toast.show('中华人民共和国 none modal', 3000, false)}>
          Toast.show none modal
        </Button>

        <Button type="primary" onClick={() => Toast.show('hello,world', 1000)}>
          Toast.show 1s
        </Button>

        <Button onClick={() => setV((v) => !v)}>Toast comp toggle</Button>
      </Space>
    </div>
  );
}
