import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button } from 'react-uni-comps';
import Ripple from '../src/Ripple';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认底部">
        <Button type="primary">hello,world</Button>
        <Ripple>
          <Button as="div" style={{ width: 200, height: 150 }}>
            hello,world
          </Button>
        </Ripple>

        <Ripple>
          <Button outlined>hello,world</Button>
        </Ripple>

        <Ripple>
          <Button type="primary">hello,world</Button>
        </Ripple>

        <Ripple>
          <div
            style={{
              height: 100,
              width: 200,
              background: 'red',
            }}
          ></div>
        </Ripple>
      </DemoBlock>
    </PageWrap>
  );
}
