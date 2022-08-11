import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { RoundSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <RoundSpin />
      </DemoBlock>

      <DemoBlock title="大小">
        <RoundSpin size={40} color="#999" />
      </DemoBlock>

      <DemoBlock title="颜色">
        <RoundSpin color="red" />
      </DemoBlock>

      <DemoBlock title="线条宽度">
        <RoundSpin color="#005cff" strokeWidth={1} size={40} />
      </DemoBlock>
    </PageWrap>
  );
}
