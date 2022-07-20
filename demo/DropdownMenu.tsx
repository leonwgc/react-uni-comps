import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { Button, Space, styled, clsx, IconArrow, Mask, useUpdateEffect } from 'react-uni-comps';

const StyledWrap = styled.div`
  margin-top: 100px;
  padding: 16px 12px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease-in-out;

  .dropdown {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
  }

  .uc-btn {
    height: 32px;
    width: 100px;
  }

  &.visible {
    z-index: 1000;
  }

  .list {
    padding: 12px;
  }
`;

export default function App() {
  const [v, setV] = useState(false);
  const wrapRef = useRef();
  const maskRef = useRef();
  const dropdownRef = useRef();

  useUpdateEffect(() => {
    if (v) {
      const pos = wrapRef.current.getBoundingClientRect().bottom + 'px';
      maskRef.current.style.top = pos;
      dropdownRef.current.style.top = pos;
    }
  }, [v]);

  return (
    <PageWrap>
      <StyledWrap className={clsx({ visible: v })} ref={wrapRef}>
        <Space onClick={() => setV(!v)}>
          全部分类 <IconArrow direction={v ? 'top' : 'bottom'} />
        </Space>

        <Mask ref={maskRef} visible={v} onClick={() => setV(false)} duration={0} />
        <div className="dropdown" ref={dropdownRef}>
          {v && (
            <Space className="list" wrap style={{ justifyContent: 'space-between' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <Button key={item} onClick={() => setV(false)}>
                  {item}
                </Button>
              ))}
            </Space>
          )}
        </div>
      </StyledWrap>
    </PageWrap>
  );
}
