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

      <DemoBlock title="颜色">
        <Spin style={{ color: 'red' }}></Spin>
      </DemoBlock>

      <DemoBlock title="大小">
        <Spin style={{ fontSize: 30, color: '#005cff' }}></Spin>
      </DemoBlock>
    </PageWrap>
  );
}
