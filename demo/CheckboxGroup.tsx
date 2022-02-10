import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { CheckboxGroup } from 'react-uni-comps';

const options1 = [
  { label: 'apple', value: 0 },
  { label: 'banana', value: 1 },
  { label: 'orange', value: 2 },
];

export default function App() {
  const [value, setValue] = useState();
  const [options, setOptions] = useState(['item1', 'item2', 'item3']);
  const [v, setV] = useState([1]);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <CheckboxGroup
          options={options}
          value={value}
          onChange={(v) => setValue(v)}
        ></CheckboxGroup>
      </DemoBlock>
      <DemoBlock title="禁用">
        <CheckboxGroup
          options={options}
          disabled
          value={value}
          onChange={(v) => setValue(v)}
        ></CheckboxGroup>
      </DemoBlock>

      <DemoBlock title="label&value 数组">
        <CheckboxGroup
          options={options1}
          value={v}
          onChange={(v) => {
            console.log(v);
            setV(v);
          }}
        ></CheckboxGroup>
      </DemoBlock>

      <DemoBlock title="按钮风格">
        <CheckboxGroup
          button
          options={options1}
          value={v}
          onChange={(v) => {
            console.log(v);
            setV(v);
          }}
        ></CheckboxGroup>

        <div style={{ marginTop: 20 }}>
          <CheckboxGroup
            button="fill"
            options={options1}
            value={v}
            onChange={(v) => {
              console.log(v);
              setV(v);
            }}
          ></CheckboxGroup>
        </div>

        <div style={{ marginTop: 20 }}>
          <CheckboxGroup
            disabled
            button="outline"
            options={options1}
            value={v}
            onChange={(v) => {
              console.log(v);
              setV(v);
            }}
          ></CheckboxGroup>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
