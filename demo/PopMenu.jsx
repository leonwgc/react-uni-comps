import React, { useState, useRef } from 'react';
import { Button, PopMenu, styled, useUpdateLayoutEffect } from 'react-uni-comps';

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
  const anchorRef = useRef();
  const ref = useRef(0);

  const [placement, setPlacement] = useState('bottom-right');
  const [v, setV] = useState(false);

  useUpdateLayoutEffect(() => {
    // update  position
    if (v) {
      ref.current++;
      setPlacement(ref.current % 2 == 0 ? 'top-right' : 'bottom-right');
    }
  }, [v]);
  return (
    <StyledPopMenu
      arrow={true}
      onVisibleChange={setV}
      placement={placement}
      // closeOnClick={false}
      trigger="click"
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
