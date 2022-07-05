import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { BallSpin, styled, AutoCenter, Space } from 'react-uni-comps';

const StyledBg = styled.div({
  fontSize: 16,
  background: '#0D72FF',
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
});

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <AutoCenter>
          <Space>
            <BallSpin style={{ color: '#005cff', fontSize: 20 }} />

            <BallSpin style={{ color: 'red', fontSize: 20 }} />
          </Space>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="有色背景">
        <StyledBg>
          <Space size={4}>
            <BallSpin /> <span>加载中...</span>
          </Space>
        </StyledBg>
      </DemoBlock>
    </PageWrap>
  );
}
