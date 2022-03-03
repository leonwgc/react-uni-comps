import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Stepper, Button, Space } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState(8);
  return (
    <PageWrap>
      <Block title="默认">
        <Stepper onChange={console.log} />
      </Block>

      <Block title="默认值">
        <Stepper defaultValue={10} onChange={console.log} />
      </Block>

      <Block title="指定步长">
        <Stepper step={2} onChange={console.log} />
      </Block>

      <Block title="最大最小值">
        <Stepper step={2} defaultValue={10} min={2} max={16} onChange={console.log} />
      </Block>

      <Block title="受控">
        <Space>
          <Stepper value={v} onChange={setV} /> {v}
          <Button onClick={() => setV(6)}>设置为6</Button>
        </Space>
      </Block>
    </PageWrap>
  );
}
