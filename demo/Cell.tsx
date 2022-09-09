import React, { useState } from 'react';
import { Cell, Switch, Input, NumberKeyboard, CheckboxGroup, Toast } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import useBgColor from './hooks/useBgColor';

const options2 = [
  { label: '选项A', value: 0 },
  { label: '选项B', value: 1 },
  { label: '选项C', value: 2 },
];

export default function App() {
  const [v, setV] = useState<any>('');
  const [v2, setV2] = useState<any>([2]);

  useBgColor('#f7f8fa');

  return (
    <PageWrap>
      <DemoBlock padding="0">
        <Cell label="name" content="leonwgc" />
        <Cell label="姓名" required>
          <Input type="text" placeholder="请输入用户名" />
        </Cell>

        <Cell label="输入框" required="#" description="自定义required">
          <Input
            placeholder="输入框"
            value={v}
            onChange={setV}
            suffix={<span>{v.length}/60</span>}
          />
        </Cell>

        <Cell label="是否居中" content={<Switch />}></Cell>

        <Cell
          label="多选"
          content={<CheckboxGroup options={options2} value={v2} onChange={setV2} />}
        ></Cell>
      </DemoBlock>
    </PageWrap>
  );
}
