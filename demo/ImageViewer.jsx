import React, { useState } from 'react';
import { Button, ImageViewer, Space } from '../src';

const demoImages = [
  'https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=727460147,2222092211&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2511982910,2454873241&fm=193&f=GIF',
];

export default function App() {
  const [v, setV] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Space size={20} style={{ margin: 20 }}>
      <Button onClick={() => setV(true)}>显示单个图片预览</Button>
      <Button onClick={() => setVisible(true)}>显示图片预览</Button>
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
  );
}
