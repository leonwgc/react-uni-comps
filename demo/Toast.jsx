import React, { useState } from 'react';
import { Spinner, Space, Toast, Button, IconTick } from '../src';

export default function App() {
  const [v, setV] = useState(false);
  return (
    <div className="app">
      <Toast content="中华人民共和国" visible={v} />

      <Space direction="vertical" size={50}>
        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
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
              ),
              maskStyle: { backgroundColor: 'red', opacity: 0.1 },
            })
          }
        >
          loading & maskStyle
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
                <Space direction="vertical" size={12} style={{ width: 120, textAlign: 'center' }}>
                  <div
                    style={{
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'inline-flex',
                      backgroundColor: '#fff',
                    }}
                  >
                    <IconTick size={40 * 0.5} color="#333" />
                  </div>
                  认证成功
                </Space>
              ),
            })
          }
        >
          Toast.show checked
        </Button>

        <Button
          type="primary"
          onClick={() => Toast.show({ content: '中华人民共和国 none modal', modal: false })}
        >
          Toast.show not modal
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: 'hello,world',
              style: {
                top: 100,
              },
            })
          }
        >
          Toast.show, toast style, top 100px
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: 'hello,world',
              duration: 1000,
              style: {
                top: 'unset',
                bottom: 10,
              },
            })
          }
        >
          Toast.show, toast style, bottom 100px
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: 'hello,world',
              style: {
                top: 'unset',
                bottom: 10,
                background: '#00bc8d',
                width: '80vw',
              },
            })
          }
        >
          Toast.show, buttom
        </Button>

        <Button onClick={() => setV((v) => !v)}>Toast comp toggle</Button>
      </Space>
    </div>
  );
}
