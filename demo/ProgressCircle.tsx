import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ProgressCircle, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space wrap>
          <ProgressCircle percent={30}></ProgressCircle>
          <ProgressCircle percent={60}></ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title="尺寸">
        <Space wrap>
          <ProgressCircle percent={30} size={32}></ProgressCircle>
          <ProgressCircle percent={30} size={64}></ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock title="颜色">
        <Space wrap>
          <ProgressCircle percent={30} size={32} color="red"></ProgressCircle>
          <ProgressCircle percent={30} size={64} color="green"></ProgressCircle>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
