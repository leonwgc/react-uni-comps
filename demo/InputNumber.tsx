import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { InputNumber, Button, Space, Icon } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState<string | number>(8);
  return (
    <PageWrap>
      <Block title="默认">
        <InputNumber onChange={console.log} placeholder="请输入" />
      </Block>

      <Block title="一位小数">
        <InputNumber digits={1} defaultValue={1.2} />
      </Block>

      <Block title="禁用">
        <InputNumber disabled defaultValue={12345} />
      </Block>
      <Block title="前后缀">
        <InputNumber
          prefix={<Icon type="uc-icon-gouwuche" />}
          suffix={'美刀'}
          defaultValue={10}
          onChange={console.log}
        />
      </Block>

      <Block title="最大最小值 2-16">
        <InputNumber defaultValue={10} min={2} max={16} onChange={console.log} />
      </Block>
      <Block title="受控">
        <Space>
          <InputNumber value={v} onChange={setV} /> {v}
          <Button onClick={() => setV(6)}>设置为6</Button>
        </Space>
      </Block>
    </PageWrap>
  );
}
