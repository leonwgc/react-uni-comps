import React, { useState } from 'react';
import { Radio, Divider, styled } from 'react-uni-comps';

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
