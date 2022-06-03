import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { WaitLoading, Spin } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认延迟400ms渲染">
        <WaitLoading>
          <Spin />
        </WaitLoading>
      </DemoBlock>

      <DemoBlock title="延迟1s渲染">
        <WaitLoading wait={1000}>
          <Spin />
        </WaitLoading>
      </DemoBlock>
    </PageWrap>
  );
}
