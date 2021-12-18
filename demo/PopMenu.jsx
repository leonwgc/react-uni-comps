import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
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
  margin: 32px;
  &.active {
    border: 3px solid red;
    transform: all 0.3s ease;
  }
`;

export default function App() {
  const arr = Array.from(new Array(10), (e, i) => i);
  const ref = useRef(0);

  const [placement, setPlacement] = useState('right-top');
  const [v, setV] = useState(false);

  useUpdateLayoutEffect(() => {
    if (v) {
      ref.current++;
      setPlacement(ref.current % 2 == 0 ? 'right-top' : 'bottom-left');
    }
  }, [v]);
  return (
    <PageWrap>
      <StyledPopMenu
        arrow={true}
        onVisibleChange={setV}
        placement={placement}
        trigger="hover"
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
        <StyledBtn type="primary">鼠标移入移出试试 </StyledBtn>
      </StyledPopMenu>
    </PageWrap>
  );
}
