import React, { useState } from 'react';
import styled from '../src/styled';
import { Space, Checkbox, Divider, Button } from '../src';

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
      <Checkbox checked={checked} onChange={setChecked}>
        controlled check
      </Checkbox>
      <Button onClick={() => setChecked(!checked)}>toggle checked outside</Button>
      <Divider>uncontrolled</Divider>
      <Checkbox defaultChecked onChange={(c) => console.log(c)}>
        uncontrolled check
      </Checkbox>

      <Divider>others</Divider>
      <Space wrap>
        <Checkbox style={{ borderRadius: '50%' }} size={60} defaultChecked>
          good
        </Checkbox>
        <Checkbox
          style={{ backgroundColor: 'red', borderRadius: '50%' }}
          size={32}
          defaultChecked
          disabled
        >
          love u
        </Checkbox>
        <Checkbox disabled>love u</Checkbox>
        <Checkbox disabled checked>
          love u
        </Checkbox>
      </Space>
    </StyledContent>
  );
}
