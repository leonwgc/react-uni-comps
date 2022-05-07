import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AspectRatio } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认宽高比 4 / 3" align="center">
        <AspectRatio style={{ width: 200 }}>
          <img src="https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF" />
        </AspectRatio>
      </DemoBlock>

      <DemoBlock title="1/1" align="center">
        <AspectRatio style={{ width: 200 }} ratio={1 / 1}>
          <img src="https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF" />
        </AspectRatio>
      </DemoBlock>

      <DemoBlock title="15/9" align="center">
        <AspectRatio style={{ width: 200 }} ratio={15 / 9}>
          <img src="https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF" />
        </AspectRatio>
      </DemoBlock>
    </PageWrap>
  );
}
