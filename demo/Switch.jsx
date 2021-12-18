import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import { Space, Switch } from 'react-uni-comps';

export default function App() {
  const [c, setC] = useState(false);

  return (
    <PageWrap>
      <Space wrap direction="vertical" size={16}>
        <Space>
          <Switch checked={c} onChange={setC} />
          {c ? 'checked' : 'unchecked'}
        </Space>

        <Switch checked />

        <Space>
          <Switch defaultChecked /> 默认打开
        </Space>

        <Space>
          <Switch disabled defaultChecked /> 禁用
        </Space>

        <Space>
          <Switch disabled /> 禁用
        </Space>
      </Space>
    </PageWrap>
  );
}
