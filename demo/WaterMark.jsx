import React, { useState } from 'react';
import { WaterMark, Button, Space } from '../src';

const textProps = {
  content: 'react-uni-comps',
  fontSize: 16,
};

const imageProps = {
  image: 'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
};

export default function App() {
  const [props, setProps] = useState(textProps);

  return (
    <div style={{ padding: 20 }}>
      <Space>
        <Button onClick={() => setProps(textProps)}>普通水印</Button>
        <Button type="primary" onClick={() => setProps(imageProps)}>
          图片水印
        </Button>
      </Space>

      <WaterMark {...props} />
    </div>
  );
}
