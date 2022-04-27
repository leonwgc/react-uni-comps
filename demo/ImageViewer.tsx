import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, ImageViewer, Space } from 'react-uni-comps';

const demoImages = [
  'https://t7.baidu.com/it/u=1811223786,2017754440&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2466425392,342874463&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1139638767,225908414&fm=193&f=GIF',
];

export default function App() {
  const [v, setV] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="单张图片预览">
        <Button onClick={() => setV(true)}>单图预览</Button>

        <ImageViewer
          images={demoImages[2]}
          visible={v}
          onClose={() => {
            setV(false);
          }}
        />
      </DemoBlock>

      <DemoBlock title="多张图片预览">
        <Button onClick={() => setV1(true)}>多图预览</Button>

        <ImageViewer
          images={demoImages}
          visible={v1}
          onClose={() => {
            setV1(false);
          }}
        />
      </DemoBlock>

      <DemoBlock title="多图加上图片切换按钮">
        <Button onClick={() => setV2(true)}>多图加切换按钮</Button>

        <ImageViewer
          images={demoImages}
          visible={v2}
          showPrevNextButton
          prev="上一张"
          next="下一张"
          onClose={() => {
            setV2(false);
          }}
        />
      </DemoBlock>

      <DemoBlock title="自定义遮罩">
        <Button onClick={() => setV3(true)}>自定义遮罩</Button>

        <ImageViewer
          images={demoImages}
          visible={v3}
          maskStyle={{ opacity: 1 }}
          showPrevNextButton
          prev="上一张"
          next="下一张"
          onClose={() => {
            setV3(false);
          }}
        />
      </DemoBlock>
    </PageWrap>
  );
}
