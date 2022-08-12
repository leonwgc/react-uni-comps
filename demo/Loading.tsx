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

      <DemoBlock title="文本">
        <Space>
          <Button
            onClick={() => {
              Loading.show('努力提交中..');

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            文本
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="spin类型">
        <Space>
          <Button
            onClick={() => {
              Loading.show('', {
                type: 'spin',
              });

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            微信风格
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="spin类型">
        <Space>
          <Button
            onClick={() => {
              Loading.show(null, {
                type: 'round',
                spinSize: 40,
              });

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            半圆风格
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="spin类型">
        <Space>
          <Button
            onClick={() => {
              Loading.show(null, {
                type: 'clock',
              });

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            时钟/花瓣风格
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Space>
          <Button
            onClick={() => {
              Loading.show('', {
                spinSize: 50,
                type: 'clock',
                containerStyle: { width: 100, height: 100, fontSize: 20 },
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
