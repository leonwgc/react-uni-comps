import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { YYLoader, AutoCenter } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <div
          style={{
            background: '#0D72FF',
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <YYLoader style={{ color: '#fff' }} />
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
