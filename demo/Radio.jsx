import React, { useState } from 'react';
import styled from '../src/styled';
import { Space, Radio, Divider, Button } from '../src';

const StyledContent = styled.div`
  .uc-checkbox {
    margin: 0 8px;
  }
`;

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <StyledContent>
      <Divider>controlled</Divider>
      <Radio checked={checked} onChange={setChecked}>
        controlled radio
      </Radio>

      <Divider>radio</Divider>
      <Radio mode="radio" defaultChecked onChange={(c) => console.log(c)}>
        radio
      </Radio>
      <Radio mode="radio" onChange={(c) => console.log(c)}>
        radio1
      </Radio>
    </StyledContent>
  );
}
