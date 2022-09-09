import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Toast, Button, ClockSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space>
          <Button type="primary" onClick={() => Toast.show('默认')}>
            默认
          </Button>

          <Button
            type="primary"
            onClick={() =>
              Toast.show({
                content: '关闭回调',
                afterClose: () => {
                  console.log('关闭回调');
                },
              })
            }
          >
            关闭回调
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义">
        <Space wrap direction="vertical">
          <Button
            type="primary"
            onClick={() =>
              Toast.show({
                content: '自定义mask',
                maskStyle: { backgroundColor: 'red', opacity: 0.1 },
                style: { borderRadius: 8, top: 100 },
              })
            }
          >
            自定义mask
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
            自定义样式 top:100px
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
            自定义样式 bottom:100px
          </Button>

          <Button
            type="primary"
            onClick={() =>
              Toast.show({
                content: 'hello,world',
                style: {
                  top: 'unset',
                  bottom: 10,
                  background: '#ccc',
                  width: '80vw',
                },
              })
            }
          >
            自定义内容样式
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义内容">
        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
                <Space
                  direction="vertical"
                  size={12}
                  style={{
                    width: 80,
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#fff',
                  }}
                >
                  <ClockSpin />
                  加载中...
                </Space>
              ),
            })
          }
        >
          自定义内容
        </Button>
      </DemoBlock>

      <DemoBlock title="非模态">
        <Space>
          <Button
            type="primary"
            onClick={() => Toast.show({ content: '非模态', modal: false, duration: 300000 })}
          >
            非模态
          </Button>

          <Button
            type="primary"
            onClick={() => {
              Toast.hide();
            }}
          >
            关闭
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
