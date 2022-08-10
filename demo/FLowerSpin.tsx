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
        <FlowerSpin style={{ color: 'red' }} />
      </DemoBlock>

      <DemoBlock title="尺寸">
        <FlowerSpin size={30} />
      </DemoBlock>
    </PageWrap>
  );
}
