import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Button, Mask, Space } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState(true);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);

  return (
    <PageWrap>
      <Block>
        <Space>
          <Button onClick={() => setV(true)}>默认</Button>
          <Mask visible={v} onClick={() => setV(false)} />

          <Button onClick={() => setV1(true)}>颜色</Button>
          <Mask visible={v1} onClick={() => setV1(false)} style={{ background: 'red' }} />

          <Button onClick={() => setV2(true)}>透明度和动画</Button>
          <Mask opacity={0.7} duration={100} visible={v2} onClick={() => setV2(false)} />
        </Space>
      </Block>
    </PageWrap>
  );
}
