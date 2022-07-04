import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { SyncLoader } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <SyncLoader />

        <div style={{ marginTop: 10 }}>
          <SyncLoader iterationCount="infinite" />
        </div>
      </DemoBlock>

      <DemoBlock title="尺寸和间距">
        <SyncLoader size={12} gap={12} />
      </DemoBlock>

      <DemoBlock title="颜色">
        <SyncLoader color="#005cff" />
      </DemoBlock>

      <DemoBlock title="动画设置">
        <SyncLoader duration={500} iterationCount="2" size={10} />
      </DemoBlock>
    </PageWrap>
  );
}
