import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { styled, Button, Mask } from 'react-uni-comps';

const StyledMask = styled(Mask)`
  background: red;
`;

export default function App() {
  const [v, setV] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);

  return (
    <PageWrap>
      <Block title="例1">
        <Button onClick={() => setV(true)}>默认</Button>
        <Mask visible={v} onClick={() => setV(false)} />
      </Block>

      <Block title="背景色">
        <Button onClick={() => setV1(true)}>背景色</Button>
        <StyledMask visible={v1} onClick={() => setV1(false)} />
      </Block>

      <Block title="透明度和过度效果">
        <Button onClick={() => setV2(true)}>透明度和过度效果</Button>
        <Mask opacity={0.7} duration={0} visible={v2} onClick={() => setV2(false)} />
      </Block>
    </PageWrap>
  );
}
