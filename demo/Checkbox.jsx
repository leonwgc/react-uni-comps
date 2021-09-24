import React, { useState } from 'react';
import styled  from '../src/styled';
import { Space, Checkbox } from '../src';

const StyledContent = styled.div`
  .uc-checkbox {
    margin: 0 8px;
  }
`;

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <StyledContent>
      <Space wrap>
        <Checkbox checked={checked} onChange={setChecked}>
          hello
        </Checkbox>

        <Checkbox size={32} defaultChecked />
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
