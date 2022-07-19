import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import { Button, Space, styled, clsx, IconArrow, Mask } from 'react-uni-comps';

const StyledWrap = styled.div`
  padding: 16px 12px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease-in-out;

  .uc-btn {
    height: 32px;
    width: 100px;
  }

  &.visible {
    z-index: 1000;
  }

  .list {
    margin-top: 16px;
  }
`;

export default function App() {
  const [v, setV] = useState(false);

  return (
    <PageWrap>
      <StyledWrap className={clsx({ visible: v })}>
        <Space onClick={() => setV(true)}>
          全部分类 <IconArrow direction={v ? 'top' : 'bottom'} />
        </Space>

        {v && (
          <Space className="list" wrap style={{ justifyContent: 'space-between' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Button key={item} outlined>
                {item}
              </Button>
            ))}
          </Space>
        )}
      </StyledWrap>
      <Mask visible={v} onClick={() => setV(false)} duration={0} />
    </PageWrap>
  );
}
