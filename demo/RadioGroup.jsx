import React, { useState } from 'react';
import { Divider, Button, RadioGroup, styled } from 'react-uni-comps';

const StyledContent = styled.div`
  .uc-checkbox {
    margin: 0 8px;
  }
`;

const options1 = [
  { label: 'apple', value: 0 },
  { label: 'banana', value: 1 },
  { label: 'orange', value: 2 },
];

export default function App() {
  const [value, setValue] = useState();
  const [options, setOptions] = useState(['item1', 'item2', 'item3']);
  const [v, setV] = useState();

  return (
    <StyledContent>
      <Divider>只有受控模式</Divider>

      <RadioGroup options={options} value={value} onChange={(v) => setValue(v)}></RadioGroup>

      <Button
        type="primary"
        style={{ marginTop: 30 }}
        onClick={() => setOptions((o) => o.concat('item' + (o.length + 1)))}
      >
        add option
      </Button>

      <Divider>disabled</Divider>
      <RadioGroup
        options={options}
        disabled
        value={value}
        onChange={(v) => setValue(v)}
      ></RadioGroup>
      <Divider>label/value options </Divider>
      <RadioGroup
        options={options1}
        value={v}
        onChange={(v) => {
          console.log(v);
          setV(v);
        }}
      ></RadioGroup>

      <Divider>label/value options </Divider>
      <RadioGroup
        options={options1}
        value={v}
        onChange={(v) => {
          console.log(v);
          setV(v);
        }}
      ></RadioGroup>

      <Divider>button style </Divider>
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
    </StyledContent>
  );
}
