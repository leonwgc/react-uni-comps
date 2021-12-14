import React from 'react';
import { Spin, Space, Toast, Button, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <div className="app">
      <Space direction="vertical" size={50}>
        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
                <div>
                  <Space style={{ fontSize: 24 }}>
                    <Spin style={{ color: 'rgba(255,255,255,.5)' }} /> 加载中
                  </Space>
                </div>
              ),
              maskStyle: { backgroundColor: 'red', opacity: 0.1 },
              style: { borderRadius: 8, top: 100 },
            })
          }
        >
          loading & maskStyle & style
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
                <Space
                  direction="vertical"
                  size={12}
                  style={{ width: 120, textAlign: 'center', color: '#fff' }}
                >
                  <Icon type="uc-icon-tick" style={{ fontSize: 40 }} />
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
      </Space>
    </div>
  );
}
