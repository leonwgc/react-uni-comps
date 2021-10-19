import React, { useState } from 'react';
import { Button, ImageViewer, Toast } from '../src';
import styled from '../src/styled';

const demoImages = [
  'https://t7.baidu.com/it/u=2141219545,3103086273&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3332251293,4211134448&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=695301425,3518772921&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1821636093,3729533292&fm=193&f=GIF',
];

export default function App() {
  const [v, setV] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ margin: 50 }}>
      <Button onClick={() => setV(true)}>显示单个图片预览</Button>
      <Button onClick={() => setVisible(true)}>显示图片预览</Button>
      <ImageViewer
        images={demoImages}
        visible={visible}
        onIndexChange={(index) =>
          Toast.show({ content: index + 1, duration: 400, style: { color: '#fff' } })
        }
        onClose={() => {
          setVisible(false);
        }}
      />

      <ImageViewer
        images={demoImages[2]}
        visible={v}
        onIndexChange={(index) =>
          Toast.show({ content: index + 1, duration: 400, style: { color: '#fff' } })
        }
        onClose={() => {
          setV(false);
        }}
      />
    </div>
  );
}
