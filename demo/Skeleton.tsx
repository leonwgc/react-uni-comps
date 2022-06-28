import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Skeleton } from 'react-uni-comps';

export default function SkeletonDemo() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Skeleton />
      </DemoBlock>
      <DemoBlock title="行数">
        <Skeleton rowCount={2} />
      </DemoBlock>
      <DemoBlock title="头像">
        <Skeleton avatar={60} row={3} rowWidth={['38%', '50%']} rowHeight={12} />
      </DemoBlock>
    </PageWrap>
  );
}
