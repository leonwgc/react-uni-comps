import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { DotSpin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <DotSpin />

        <div style={{ marginTop: 10 }}>
          <DotSpin iterationCount="infinite" />
        </div>
      </DemoBlock>

      <DemoBlock title="尺寸和间距">
        <DotSpin size={12} gap={12} />
      </DemoBlock>

      <DemoBlock title="颜色">
        <DotSpin color="#005cff" />
      </DemoBlock>

      <DemoBlock title="动画设置">
        <DotSpin duration={500} iterationCount="infinite" size={12} />
      </DemoBlock>
    </PageWrap>
  );
}
