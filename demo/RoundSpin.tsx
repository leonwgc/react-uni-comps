import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { RoundSpin, Switch } from 'react-uni-comps';

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <RoundSpin />
      </DemoBlock>

      <DemoBlock title="子元素Loading">
        <p>
          <Switch checked={loading} onChange={(v) => setLoading(v)} /> loading
        </p>
        <div>
          <div>
            <RoundSpin loading={loading}>
              <div
                style={{
                  height: 100,
                  background: '#00bc8d',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: 20,
                  borderRadius: 6,
                }}
              >
                hello,world
              </div>
            </RoundSpin>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock title="大小">
        <RoundSpin size={40} color="#999" />
      </DemoBlock>

      <DemoBlock title="颜色">
        <RoundSpin color="red" />
      </DemoBlock>

      <DemoBlock title="线条宽度">
        <RoundSpin color="#005cff" strokeWidth={1} size={40} />
      </DemoBlock>
    </PageWrap>
  );
}
