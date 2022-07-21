import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { RoundSpin, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space>
          <RoundSpin />
          <RoundSpin style={{ color: '#005cff' }} />
          <RoundSpin style={{ color: 'red', fontSize: 20 }} />
          <RoundSpin style={{ color: '#005cff', fontSize: 30 }} strokeWidth={2} />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
