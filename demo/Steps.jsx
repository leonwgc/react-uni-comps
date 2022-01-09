import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import { Steps, Divider, Button, Icon, styled } from 'react-uni-comps';

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
  height: 38px;
  bottom: 0;
  z-index: 10;
`;

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <PageWrap>
      <Divider>水平</Divider>
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
      <Divider>水平/圈</Divider>
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
      <Divider>垂直</Divider>
      <Steps
        direction="vertical"
        dotStyle
        current={index}
        steps={[{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }, { title: '步骤4' }]}
      ></Steps>
      <Divider>垂直1</Divider>
      <StyledSteps
        direction="vertical"
        current={index}
        steps={[
          { title: '步骤1', description: '步骤1desc', icon: <Icon type="uc-icon-tips" /> },
          {
            title: '步骤2',
            description: '',
            icon: <Icon type="uc-icon-tick" style={{ fontSize: 22 }} />,
          },
          {
            title: '步骤3',
            description: '步骤3desc',
            icon: <Icon type="uc-icon-biaoqianlan_wode" />,
          },
          { title: '步骤4', description: '步骤4desc' },
        ]}
      ></StyledSteps>
      <StyedButton
        block
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
        下一步
      </StyedButton>
    </PageWrap>
  );
}
