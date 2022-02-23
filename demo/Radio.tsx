import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Radio, Space } from 'react-uni-comps';

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Radio checked={checked} onChange={(c) => setChecked(c)}>
          默认
        </Radio>
      </DemoBlock>

      <DemoBlock title="非受控">
        <Space>
          <Radio defaultChecked onChange={(c) => console.log(c)}>
            非受控
          </Radio>
          <Radio onChange={(c) => console.log(c)}>非受控</Radio>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
