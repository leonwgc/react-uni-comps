import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Spin, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space wrap>
          <Spin style={{ color: 'red', fontSize: 30, margin: '0 20px' }}></Spin>
          <Spin style={{ fontSize: 32 }}></Spin>
          <Spin></Spin>
          <Spin style={{ color: 'red', fontSize: 48 }}></Spin>
          <Spin style={{ color: '#005cff' }}></Spin>
          <Spin style={{ color: '#005cff', fontSize: 48 }}></Spin>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
