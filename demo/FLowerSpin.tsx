import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { FlowerSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <FlowerSpin />
      </DemoBlock>

      <DemoBlock title="颜色">
        <FlowerSpin color="red" />
      </DemoBlock>

      <DemoBlock title="大小">
        <FlowerSpin size={40} color="#005cff" />
      </DemoBlock>
    </PageWrap>
  );
}
