import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { FlowerSpin, styled, AutoCenter, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <FlowerSpin style={{ color: 'red' }} />
      </DemoBlock>
    </PageWrap>
  );
}
