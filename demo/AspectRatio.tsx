import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AspectRatio } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="15/9">
        <AspectRatio ratio={15 / 9}>
          <img src="https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF" />
        </AspectRatio>
      </DemoBlock>

      <DemoBlock title="4/3">
        <AspectRatio>
          <img src="https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF" />
        </AspectRatio>
      </DemoBlock>
    </PageWrap>
  );
}
