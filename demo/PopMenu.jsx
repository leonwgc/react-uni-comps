import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { Button, PopMenu, styled, useUpdateLayoutEffect } from 'react-uni-comps';

const StyledPopMenu = styled(PopMenu)`
  width: 240px;
  border-radius: 4px;

  .list {
    height: 195px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    .uc-btn {
      border: none;
      transition-property: none;
      &:hover {
        background-color: #005cff;
        color: #fff;
      }
    }
  }
`;

const StyledBtn = styled(Button)`
  margin: 32px;
  &.visible {
    transform: all 0.3s;
    box-shadow: 0 0 4px 4px #005cff;
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
              // <div className="item" key={i}>
              //   {`menu${i}`}
              // </div>
              <Button block>
                item
                {i}
              </Button>
            ))}
          </div>
        }
      >
        <StyledBtn active>鼠标移入移出试试 </StyledBtn>
      </StyledPopMenu>
    </PageWrap>
  );
}
