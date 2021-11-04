import React from 'react';
import { Tooltip, Button, Space, PopMenu } from '../src';
import styled from '../src/styled';

const StyledPopMenu = styled(PopMenu)`
  width: 240px;
  height: 195px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  box-shadow: 0px 6px 24px 0px undefined;
`;

export default function App() {
  const arr = Array.from(new Array(10), (i) => i);
  return (
    <StyledPopMenu
      content={
        <div>
          {arr.map((i) => (
            <div key={i}>menu{i}</div>
          ))}
        </div>
      }
    >
      <Button>hello</Button>
    </StyledPopMenu>
  );
}
