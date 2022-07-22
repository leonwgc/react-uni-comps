import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Button, Mask } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);

  return (
    <PageWrap>
      <Block title="默认">
        <Button onClick={() => setV(true)}>默认</Button>
        <Mask visible={v} onClick={() => setV(false)} />
      </Block>

      <Block title="颜色">
        <Button onClick={() => setV1(true)}>颜色</Button>
        <Mask visible={v1} onClick={() => setV1(false)} style={{ background: 'red' }} />
      </Block>

      <Block title="透明度和过度效果">
        <Button onClick={() => setV2(true)}>透明度和过度效果</Button>
        <Mask opacity={0.7} duration={100} visible={v2} onClick={() => setV2(false)} />
      </Block>
    </PageWrap>
  );
}
