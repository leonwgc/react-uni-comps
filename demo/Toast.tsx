import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Spin, Space, Toast, Button, ClockSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space>
          <Button onClick={() => Toast.show('默认')}>默认</Button>

          <Button
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
        <Space wrap size={16}>
          <Button
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
            自定义mask
          </Button>
          <Button
            onClick={() =>
              Toast.show({
                content: 'hello,world',
                style: {
                  top: 100,
                },
              })
            }
          >
            自定义样式，设置显示位置 top:100px
          </Button>

          <Button
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
            自定义样式，设置显示位置 bottom:100px
          </Button>

          <Button
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
            自定义样式，背景色，大小
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义内容">
        <Button
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
          <Button onClick={() => Toast.show({ content: '非模态', modal: false, duration: 300000 })}>
            非模态
          </Button>

          <Button
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
