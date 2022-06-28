import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { SkeletonBase } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="矩形">
        <SkeletonBase />
      </DemoBlock>

      <DemoBlock title="圆形">
        <SkeletonBase shape="circle" style={{ width: 60, height: 60 }} />
      </DemoBlock>
    </PageWrap>
  );
}
