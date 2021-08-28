import React, { useState } from 'react';
import { Spinner, Space, Toast, Button, Tick } from '../src';

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
              <div
                style={{
                  width: 160,
                  height: 80,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Space>
                  <Spinner color="rgba(255,255,255,.5)" /> 加载中
                </Space>
              </div>
            )
          }
        >
          Toast.show loading
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show(
              <Space direction="vertical" size={12} style={{ width: 120, textAlign: 'center' }}>
                <div
                  style={{
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'inline-block',
                    backgroundColor: '#fff',
                  }}
                >
                  <Tick size={40} color="#333" />
                </div>
                认证成功
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
