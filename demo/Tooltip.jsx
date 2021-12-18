import React from 'react';
import PageWrap from './common/PageWrap';
import { Tooltip, Button, Space, styled } from 'react-uni-comps';

const StyledToolTip = styled(Tooltip)`
  font-size: 14px;
  padding: 12px;
  color: red;
  background-color: #eee;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <PageWrap>
      <Space size={32}>
        <Tooltip offset={{ x: -10, y: 15 }} arrow={false} placement="right" title="右侧">
          <Button>右侧</Button>
        </Tooltip>

        <Tooltip title="默认上侧">
          <Button>默认</Button>
        </Tooltip>

        <StyledToolTip
          placement="bottom-left"
          title="自定义样式"
          onVisibleChange={(v) => {
            console.log(v ? '可见' : '不可见');
          }}
        >
          <Button type="primary">自定义样式</Button>
        </StyledToolTip>
      </Space>
    </PageWrap>
  );
}
