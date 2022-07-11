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
              Loading.show('努力提交中..', 'wechat');

              setTimeout(() => {
                Loading.hide();
              }, 1000);
            }}
          >
            微信风格loading
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
