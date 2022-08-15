import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ClockSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <ClockSpin />
      </DemoBlock>

      <DemoBlock title="颜色">
        <ClockSpin color="red" />
      </DemoBlock>

      <DemoBlock title="大小">
        <ClockSpin size={50} color="#005cff" />
      </DemoBlock>
    </PageWrap>
  );
}
