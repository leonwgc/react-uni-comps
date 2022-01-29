import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Ripple, Button } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="点击波纹效果">
        <Ripple
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
      <DemoBlock title="button">
        <Ripple>
          <Button>hello, world</Button>
        </Ripple>
      </DemoBlock>
      <DemoBlock title="波纹颜色">
        <Ripple
          color="red"
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
    </PageWrap>
  );
}
