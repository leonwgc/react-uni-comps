import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Steps, Button, Icon, styled, Space } from 'react-uni-comps';

const StyedButton = styled(Button)`
  position: fixed;
  left: 0;
  right: 0;
  height: 38px;
  bottom: 0;
  z-index: 10;
`;

const IconUser = <Icon type="uc-icon-biaoqianlan_wode" />;

const steps = [
  { title: '步骤1' },
  { title: '步骤2' },
  { title: '步骤3', icon: IconUser },
  { title: '步骤4' },
];

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <PageWrap>
      <DemoBlock title="水平">
        <Steps direction="horizontal" current={index} steps={steps}></Steps>

        <Steps
          direction="horizontal"
          dotStyle
          current={index}
          steps={steps}
          style={{ marginTop: 16 }}
        ></Steps>
      </DemoBlock>

      <DemoBlock title="垂直">
        <Space size={32}>
          <Steps
            direction="vertical"
            current={index}
            steps={[
              { title: '步骤1', description: 'This is a description.' },
              { title: '步骤2' },
              {
                title: '步骤3',
                description: 'This is a description.',
                icon: IconUser,
              },
              { title: '步骤4' },
            ]}
          ></Steps>

          <Steps direction="vertical" dotStyle current={index} steps={steps}></Steps>
        </Space>
      </DemoBlock>

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
