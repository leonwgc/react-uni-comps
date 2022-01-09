import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Tooltip, Button, Space, styled } from 'react-uni-comps';

const StyledToolTip = styled(Tooltip)`
  font-size: 14px;
  padding: 12px;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="不同位置">
        <Space size={16}>
          <Tooltip offset={{ x: -10, y: 15 }} arrow={false} placement="right" title="右侧">
            <Button>右侧</Button>
          </Tooltip>

          <Tooltip title="默认上侧">
            <Button>默认</Button>
          </Tooltip>

          <StyledToolTip
            placement="bottom-right"
            title="自定义样式"
            onVisibleChange={(v) => {
              console.log(v ? '可见' : '不可见');
            }}
          >
            <Button type="primary">自定义样式</Button>
          </StyledToolTip>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
