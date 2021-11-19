import React, { useState } from 'react';
import { SmileOutlined, GithubOutlined } from '@ant-design/icons';
import { Steps, Divider, Button, Icon, styled } from '../src';

const StyledSteps = styled(Steps)`
  &.vertical {
    .step {
      height: 120px;
    }
  }
`;

const StyedButton = styled(Button)`
  position: fixed;
  left: 0;
  right: 0;
  height: 60px;
  bottom: 0;
  z-index: 10;
`;

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="app">
      <Divider>horizontal</Divider>
      <Steps
        direction="horizontal"
        current={index}
        steps={[
          { title: '步骤1', description: '步骤1desc' },
          { title: '步骤2', description: '步骤2desc' },
          { title: '步骤3', description: '' },
          { title: '步骤4', description: '步骤4desc' },
        ]}
      ></Steps>
      <Divider>horizontal/dotStyle</Divider>
      <Steps
        direction="horizontal"
        dotStyle
        current={index}
        steps={[
          { title: '步骤1', description: '步骤1desc' },
          { title: '步骤2', description: '步骤2desc' },
          { title: '步骤3', description: '' },
          { title: '步骤4', description: '步骤4desc' },
        ]}
      ></Steps>
      <Divider>vertical/dotStyle</Divider>
      <Steps
        direction="vertical"
        dotStyle
        current={index}
        steps={[{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }, { title: '步骤4' }]}
      ></Steps>
      <Divider>vertical</Divider>
      <StyledSteps
        direction="vertical"
        current={index}
        steps={[
          { title: '步骤1', description: '步骤1desc', icon: <SmileOutlined /> },
          {
            title: '步骤2',
            description: '',
            icon: <Icon type="uc-icon-tick" style={{ fontSize: 22 }} />,
          },
          { title: '步骤3', description: '步骤3desc', icon: <GithubOutlined /> },
          { title: '步骤4', description: '步骤4desc' },
        ]}
      ></StyledSteps>
      <StyedButton
        block
        type="primary"
        onClick={() => {
          setIndex((i) => {
            if (i + 1 <= 3) {
              return i + 1;
            } else {
              return 0;
            }
          });
        }}
      >
        next
      </StyedButton>
    </div>
  );
}
