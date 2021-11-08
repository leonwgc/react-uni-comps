import React from 'react';
import { Tooltip, Button, Space, PopMenu } from '../src';
import styled from '../src/styled';

const StyledPopMenu = styled(PopMenu)`
  width: 240px;
  border-radius: 4px;
  background-color: #eee;

  .list {
    height: 195px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      padding: 0 12px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      user-select: none;
      cursor: pointer;
      &:hover {
        color: #004bcc;
        background: rgba(0, 75, 204, 0.08);
      }
    }
  }
`;

const StyledBtn = styled(Button)`
  position: fixed;
  left: 200px;
  top: 300px;
  &.active {
    border: 1px solid red;
  }
`;

export default function App() {
  const arr = Array.from(new Array(10), (e, i) => i);
  return (
    <StyledPopMenu
      arrow={true}
      // closeOnClick={false}
      // trigger="hover"
      content={
        <div className="list">
          {arr.map((i) => (
            <div className="item" key={i}>
              {`menu${i}`}
            </div>
          ))}
        </div>
      }
    >
      <StyledBtn>hello</StyledBtn>
    </StyledPopMenu>
  );
}
