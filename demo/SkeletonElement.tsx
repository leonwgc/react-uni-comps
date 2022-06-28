import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { SkeletonElement } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="矩形">
        <SkeletonElement />
      </DemoBlock>

      <DemoBlock title="圆形">
        <SkeletonElement shape="circle" style={{ width: 60, height: 60 }} />
      </DemoBlock>

      <DemoBlock title="颜色">
        <SkeletonElement style={{ height: 10, background: '#00bc8d' }} />
      </DemoBlock>
    </PageWrap>
  );
}
