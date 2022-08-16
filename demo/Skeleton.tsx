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

      <DemoBlock title="行数,行高,和行宽">
        <Skeleton rowCount={4} rowWidth={['38%', '50%', 100, '100%']} rowHeight={6} />
      </DemoBlock>

      <DemoBlock title="左侧显示圆形">
        <Skeleton round={48} rowCount={4} rowWidth={['38%', '50%']} rowHeight={6} />
      </DemoBlock>
    </PageWrap>
  );
}
