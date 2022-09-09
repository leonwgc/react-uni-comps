import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Space, Loading } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock>
        <Space wrap>
          <Button
            type="primary"
            onClick={() => {
              Loading.show();

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            默认
          </Button>

          <Button
            type="primary"
            onClick={() => {
              Loading.show('努力提交中..');

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            带文本
          </Button>

          <Button
            type="primary"
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

          <Button
            type="primary"
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

          <Button
            type="primary"
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

          <Button
            type="primary"
            onClick={() => {
              Loading.show('加载中...', {
                spinSize: 40,
                type: 'clock',
                gap: 12,
                containerStyle: { width: 130, height: 130, fontSize: 14, top: 260 },
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
