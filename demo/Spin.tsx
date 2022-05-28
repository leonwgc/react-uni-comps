import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Spin, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Spin />
      </DemoBlock>

      <DemoBlock title="大小和颜色">
        <Space>
          <Spin style={{ fontSize: 24 }}></Spin>

          <Spin style={{ fontSize: 32, color: 'red' }}></Spin>

          <Spin style={{ fontSize: 40, color: '#005cff' }}></Spin>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
