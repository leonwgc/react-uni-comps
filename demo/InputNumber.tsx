import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { InputNumber } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <Block title="默认">
        <InputNumber onChange={console.log} placeholder="请输入" autoFocus />
      </Block>

      <Block title="一位小数">
        <InputNumber digits={1} defaultValue={1.2} />
      </Block>

      <Block title="最大最小值 2-16">
        <InputNumber defaultValue={10} min={2} max={16} onChange={console.log} />
      </Block>
    </PageWrap>
  );
}
