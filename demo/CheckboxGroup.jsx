import React, { useState } from 'react';
import { Divider, Button, CheckboxGroup, styled } from 'react-uni-comps';

const StyledContent = styled.div`
  .uc-checkbox {
    margin: 0 8px;
  }
`;

const StyledCheckboxGroup = styled(CheckboxGroup)`
  .uc-btn {
    border-radius: 30px;
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
  const [v, setV] = useState([1]);

  return (
    <StyledContent>
      <Divider>只有受控模式</Divider>

      <CheckboxGroup options={options} value={value} onChange={(v) => setValue(v)}></CheckboxGroup>

      <Button
        type="primary"
        style={{ marginTop: 30 }}
        onClick={() => setOptions((o) => o.concat('item' + (o.length + 1)))}
      >
        add option
      </Button>

      <Divider>disabled</Divider>
      <CheckboxGroup
        options={options}
        disabled
        value={value}
        onChange={(v) => setValue(v)}
      ></CheckboxGroup>

      <Divider>label/value options </Divider>
      <CheckboxGroup
        options={options1}
        value={v}
        onChange={(v) => {
          console.log(v);
          setV(v);
        }}
      ></CheckboxGroup>

      <Divider>button style </Divider>
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
        <StyledCheckboxGroup
          button="fill"
          options={options1}
          value={v}
          onChange={(v) => {
            console.log(v);
            setV(v);
          }}
        ></StyledCheckboxGroup>
      </div>

      <div style={{ marginTop: 20 }}>
        <StyledCheckboxGroup
          disabled
          button="fill"
          options={options1}
          value={v}
          onChange={(v) => {
            console.log(v);
            setV(v);
          }}
        ></StyledCheckboxGroup>
      </div>
    </StyledContent>
  );
}
