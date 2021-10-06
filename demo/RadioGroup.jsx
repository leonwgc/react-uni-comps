import React, { useState } from 'react';
import styled from '../src/styled';
import { Divider, Button, RadioGroup } from '../src';

const StyledContent = styled.div`
  .uc-checkbox {
    margin: 0 8px;
  }
`;

export default function App() {
  const [value, setValue] = useState();
  const [options, setOptions] = useState(['item1', 'item2', 'item3']);

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
    </StyledContent>
  );
}
