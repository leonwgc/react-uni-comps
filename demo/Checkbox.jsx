import React, { useState } from 'react';
import styled from 'styled-components';
import { Space, Checkbox } from 'react-uni-comps';

const StyledContent = styled.div`
  .article {
    margin-top: 20px;
    display: flex;
    .l {
      flex: 0;
    }
    .r {
      flex: 1;
      margin-left: 16px;
      padding-top: 8px;
    }
  }

  .check {
    .uc-checkbox {
      margin: 0 8px;
    }
  }
`;

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <StyledContent>
      <Space>
        <Checkbox checked={checked} onChange={setChecked}>
          hello
        </Checkbox>
        <Checkbox defaultChecked onChange={console.log} />
        <Checkbox />
        <Checkbox color="red" />
        <Checkbox size={32} defaultChecked color="#ff4d4f" />
        <Checkbox borderRadius="50%" size={60} defaultChecked />
        <Checkbox borderRadius="50%" color="red" size={32} defaultChecked disabled>
          love u
        </Checkbox>
        <Checkbox borderRadius="50%" disabled>
          love u
        </Checkbox>
        <Checkbox disabled checked>
          love m
        </Checkbox>
      </Space>
    </StyledContent>
  );
}
