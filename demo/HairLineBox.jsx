import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { HairLineBox, Space, styled } from 'react-uni-comps';

const StyledHairline = styled(HairLineBox)`
  width: 220px;
  height: 120px;
`;

const StyledHairlineEdge = styled(HairLineBox)`
  width: 60px;
  height: 60px;
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认下边">
        <HairLineBox>默认下边</HairLineBox>
      </DemoBlock>

      <DemoBlock title="四条边">
        <HairLineBox position="all" style={{ width: 120, height: 80 }} />
      </DemoBlock>

      <DemoBlock title="圆角和颜色">
        <StyledHairline position="all" color="red" borderRadius={20} />
      </DemoBlock>

      <DemoBlock title="不同边">
        <Space>
          <StyledHairlineEdge position="left">left</StyledHairlineEdge>
          <StyledHairlineEdge position="right">right</StyledHairlineEdge>
          <StyledHairlineEdge position="bottom">bottom</StyledHairlineEdge>
          <StyledHairlineEdge position="top">top</StyledHairlineEdge>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
