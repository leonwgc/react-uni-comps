import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Switch, Icon, Checkbox } from 'react-uni-comps';

export default function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space>
          <Switch checked={checked} onChange={setChecked} />

          <Switch disabled checked={checked} onChange={setChecked} />

          <Checkbox checked={checked} onChange={setChecked}>
            开
          </Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title="文本">
        <Space>
          <Switch checked={checked} onChange={setChecked} checkedText="开" unCheckedText="关" />

          <Switch
            checked={checked}
            onChange={setChecked}
            checkedText={<Icon type="uc-icon-chenggong" />}
            unCheckedText={<Icon type="uc-icon-guanbi" />}
          />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
