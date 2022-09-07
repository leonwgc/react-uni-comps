import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AspectRatio } from 'react-uni-comps';

const img = 'https://t7.baidu.com/it/u=3440599750,1026114320&fm=193&f=GIF';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="15/9">
        <AspectRatio ratio={15 / 9}>
          <img src={img} />
        </AspectRatio>
      </DemoBlock>

      <DemoBlock title="4/3">
        <AspectRatio>
          <img src={img} />
        </AspectRatio>
      </DemoBlock>
    </PageWrap>
  );
}
