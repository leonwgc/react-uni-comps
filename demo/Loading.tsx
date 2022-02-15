import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Space, Loading, Spin } from 'react-uni-comps';

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
              }, 3000);
            }}
          >
            默认
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义内容">
        <Space>
          <Button
            onClick={() => {
              Loading.show(
                <Space direction="vertical" size={12} style={{ width: 100 }}>
                  <Spin style={{ fontSize: 42 }} />
                  加载中...
                </Space>
              );

              setTimeout(() => {
                Loading.hide();
              }, 3000);
            }}
          >
            自定义内容
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
