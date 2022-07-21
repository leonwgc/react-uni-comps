import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Space, Loading } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space>
          <Button
            onClick={() => {
              Loading.show();

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            默认
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义文本">
        <Space>
          <Button
            onClick={() => {
              Loading.show('努力提交中..');

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            自定义内容
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="spin类型">
        <Space>
          <Button
            onClick={() => {
              Loading.show('努力提交中..', {
                type: 'wechat',
                spinSize: 40,
              });

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            微信风格Spin
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="spin类型">
        <Space>
          <Button
            onClick={() => {
              Loading.show(null, {
                type: 'zarm',
                spinSize: 40,
                containerStyle: {
                  width: 100,
                  height: 100,
                },
              });

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            众安zarm风格Spin
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Space>
          <Button
            onClick={() => {
              Loading.show('so big', {
                spinSize: 60,
                gap: 8,
                containerStyle: { width: 180, height: 180, fontSize: 20 },
              });

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            自定义样式
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
