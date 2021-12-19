import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import { Button, ImageViewer, Space } from 'react-uni-comps';

const demoImages = [
  'https://t7.baidu.com/it/u=1811223786,2017754440&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2466425392,342874463&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1139638767,225908414&fm=193&f=GIF',
];

export default function App() {
  const [v, setV] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <PageWrap>
      <Space size={20}>
        <Button onClick={() => setV(true)}>单张图片预览</Button>
        <Button onClick={() => setVisible(true)}>多张图片预览</Button>

        <ImageViewer
          images={demoImages}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />

        <ImageViewer
          images={demoImages[2]}
          visible={v}
          onClose={() => {
            setV(false);
          }}
        />
      </Space>
    </PageWrap>
  );
}
