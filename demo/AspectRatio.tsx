import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AspectRatio } from 'react-uni-comps';

const img = 'https://img0.baidu.com/it/u=3844111768,3886767277&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="aspect-ratio: 15 / 9">
        <AspectRatio ratio={15 / 9}>
          <img src={img} />
        </AspectRatio>
      </DemoBlock>

      <DemoBlock title="aspect-ratio: 2 / 1">
        <AspectRatio ratio={2 / 1}>
          <img src={img} />
        </AspectRatio>
      </DemoBlock>
    </PageWrap>
  );
}
