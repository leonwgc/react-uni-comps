import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Checkbox, Space } from 'react-uni-comps';

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space wrap>
          <Checkbox checked={checked} onChange={setChecked}>
            默认
          </Checkbox>

          <Checkbox checked={checked} indeterminate>
            半选状态
          </Checkbox>

          <Checkbox disabled>disabled</Checkbox>

          <Checkbox checked disabled>
            checked
          </Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title="非受控">
        <Checkbox defaultChecked onChange={(c) => console.log(c)}>
          非受控
        </Checkbox>
      </DemoBlock>
    </PageWrap>
  );
}
