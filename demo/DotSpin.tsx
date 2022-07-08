import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { DotSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <DotSpin />
      </DemoBlock>

      <DemoBlock title="尺寸和间距">
        <DotSpin size={6} gap={6} />
      </DemoBlock>

      <DemoBlock title="颜色">
        <DotSpin color="#005cff" />
      </DemoBlock>

      <DemoBlock title="动画次数">
        <DotSpin iteration={3} size={6} />
      </DemoBlock>
    </PageWrap>
  );
}
