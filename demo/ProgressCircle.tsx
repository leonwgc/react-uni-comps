import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ProgressCircle, Button, Icon, styled, Space } from 'react-uni-comps';

const StyledProgressCircle = styled(ProgressCircle)`
  .content {
    font-size: 32px;
    color: #666;
  }
`;

export default function App() {
  const [v, setV] = useState(50);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space wrap>
          <ProgressCircle percent={0}>0%</ProgressCircle>
          <ProgressCircle percent={v}>{v}%</ProgressCircle>
          <ProgressCircle percent={100}>100%</ProgressCircle>
        </Space>
      </DemoBlock>

      <DemoBlock style={{ textAlign: 'center' }}>
        <Space>
          <Button
            circle
            onClick={() =>
              setV((v) => {
                return v - 10 >= 0 ? v - 10 : 0;
              })
            }
          >
            <Icon type="uc-icon-jian2" />
          </Button>
          <Button
            circle
            onClick={() =>
              setV((v) => {
                return v + 10 <= 100 ? v + 10 : 100;
              })
            }
          >
            <Icon type="uc-icon-jia2" />
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义">
        <StyledProgressCircle
          color="#712fd1"
          strokeWidth={20}
          strokeLinecap="butt"
          size={180}
          percent={v}
        >
          {v}%
        </StyledProgressCircle>
      </DemoBlock>
    </PageWrap>
  );
}
