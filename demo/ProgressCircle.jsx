import React, { useState } from 'react';
import { ProgressCircle, Button, Icon, styled } from '../src';

const StyledProgressCircle = styled(ProgressCircle)`
  .content {
    font-size: 32px;
    color: #666;
  }
`;

export default function App() {
  const [v, setV] = useState(50);
  return (
    <div style={{ textAlign: 'center' }}>
      <ProgressCircle progress={0}>0%</ProgressCircle>
      <ProgressCircle progress={v}>{v}%</ProgressCircle>
      <ProgressCircle progress={100}>100%</ProgressCircle>
      <StyledProgressCircle
        color="#00bc8d"
        strokeWidth={20}
        strokeLinecap="butt"
        size={180}
        progress={v}
      >
        {v}%
      </StyledProgressCircle>
      <Button
        onClick={() =>
          setV((v) => {
            return v - 10 >= 0 ? v - 10 : 0;
          })
        }
      >
        <Icon type="uc-icon-jian2" />
      </Button>
      <Button
        onClick={() =>
          setV((v) => {
            return v + 10 <= 100 ? v + 10 : 100;
          })
        }
      >
        <Icon type="uc-icon-jia2" />
      </Button>
    </div>
  );
}
