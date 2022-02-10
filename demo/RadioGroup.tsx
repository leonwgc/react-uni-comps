import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { RadioGroup } from 'react-uni-comps';

const options1 = [
  { label: 'apple', value: 0 },
  { label: 'banana', value: 1 },
  { label: 'orange', value: 2 },
];

export default function App() {
  const [value, setValue] = useState<string | number>();
  const [options, setOptions] = useState(['item1', 'item2', 'item3']);
  const [v, setV] = useState<string | number>(1);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <RadioGroup options={options} value={value} onChange={(v) => setValue(v)}></RadioGroup>
      </DemoBlock>

      <DemoBlock title="禁用">
        <RadioGroup
          options={options}
          disabled
          value={value}
          onChange={(v) => setValue(v)}
        ></RadioGroup>
      </DemoBlock>

      <DemoBlock title="label&value 数组">
        <RadioGroup
          options={options1}
          value={v}
          onChange={(v) => {
            console.log(v);
            setV(v);
          }}
        ></RadioGroup>
      </DemoBlock>

      <DemoBlock title="按钮风格">
        <RadioGroup
          button
          options={options1}
          value={v}
          onChange={(v) => {
            console.log(v);
            setV(v);
          }}
        ></RadioGroup>

        <div style={{ marginTop: 20 }}>
          <RadioGroup
            button="fill"
            options={options1}
            value={v}
            onChange={(v) => {
              console.log(v);
              setV(v);
            }}
          ></RadioGroup>
        </div>

        <div style={{ marginTop: 20 }}>
          <RadioGroup
            button="outline"
            options={options1}
            disabled
            value={v}
            onChange={(v) => {
              console.log(v);
              setV(v);
            }}
          ></RadioGroup>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
