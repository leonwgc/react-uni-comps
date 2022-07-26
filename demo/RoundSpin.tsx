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
          <RoundSpin style={{ color: 'red', fontSize: 40 }} />
          <RoundSpin style={{ color: '#c8c9cc', fontSize: 60 }} />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
