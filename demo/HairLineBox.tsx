import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { HairLineBox, Space, styled } from 'react-uni-comps';

const StyledHairline = styled(HairLineBox)`
  width: 90px;
  height: 60px;
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认下边">
        <HairLineBox mobile={false} style={{ padding: '10px 0' }}>
          默认下边
        </HairLineBox>
      </DemoBlock>

      <DemoBlock title="四条边">
        <HairLineBox
          mobile={false}
          color="#005cff"
          position="all"
          style={{ width: 120, height: 80 }}
        />
      </DemoBlock>

      <DemoBlock title="圆角和颜色">
        <StyledHairline mobile={false} position="all" color="red" borderRadius={20} />
      </DemoBlock>

      <DemoBlock title="不同边">
        <Space size={20} wrap>
          <StyledHairline mobile={false} position="left">
            left
          </StyledHairline>

          <StyledHairline mobile={false} position="right">
            right
          </StyledHairline>

          <StyledHairline mobile={false} position="bottom">
            bottom
          </StyledHairline>

          <StyledHairline mobile={false} position="top">
            top
          </StyledHairline>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
