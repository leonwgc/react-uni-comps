import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { CheckboxGroup, Checkbox, styled, Cell } from 'react-uni-comps';

const StyledCheckboxGroup = styled(CheckboxGroup)`
  > .uc-space {
    flex-direction: column;
  }
`;

const options1 = [
  { label: 'apple', value: 0 },
  { label: 'banana', value: 1 },
  { label: 'orange', value: 2 },
];

export default function App() {
  const [value, setValue] = useState<any>();
  const [options, setOptions] = useState<any>(['item1', 'item2', 'item3']);
  const [v, setV] = useState<any>([1]);

  const [v1, setV1] = useState<any>([]);

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

      <DemoBlock title="按钮风格" padding="0">
        <Cell
          label="选项列表"
          content={
            <CheckboxGroup
              button
              options={options1}
              value={v}
              onChange={(v) => {
                console.log(v);
                setV(v);
              }}
            ></CheckboxGroup>
          }
        ></Cell>

        <div style={{ marginTop: 20 }}>
          <Cell
            label="选项列表"
            content={
              <CheckboxGroup
                button="fill"
                options={options1}
                value={v}
                onChange={(v) => {
                  console.log(v);
                  setV(v);
                }}
              ></CheckboxGroup>
            }
          ></Cell>
        </div>

        <div style={{ marginTop: 20 }}>
          <Cell
            label="选项列表"
            content={
              <CheckboxGroup
                disabled
                button="outline"
                options={options1}
                value={v}
                onChange={(v) => {
                  setV(v);
                }}
              ></CheckboxGroup>
            }
          ></Cell>
        </div>
      </DemoBlock>
      <DemoBlock title="全选 / 反选">
        <Checkbox
          style={{ marginBottom: 24 }}
          checked={v1.length === 3}
          indeterminate={v1.length < 3 && v1.length > 0}
          onChange={(c) => {
            if (c) {
              setV1([0, 1, 2]);
            } else {
              setV1([]);
            }
          }}
        >
          全选 / 反选
        </Checkbox>

        <CheckboxGroup
          options={options1}
          value={v1}
          onChange={(v) => {
            setV1(v);
            console.log(v);
          }}
        ></CheckboxGroup>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <StyledCheckboxGroup options={options} />
      </DemoBlock>
    </PageWrap>
  );
}
