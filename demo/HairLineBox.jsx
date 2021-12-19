import React from 'react';
import { HairLineBox, Divider, styled } from 'react-uni-comps';

const StyledHairline = styled(HairLineBox)`
  width: 200px;
  height: 200px;
  margin-left: 16px;
  &::after {
    border-radius: 20px;
  }
`;

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <Divider textPosition="left">默认</Divider>
      <HairLineBox style={{ padding: '16px 0' }}>hell,world</HairLineBox>

      <Divider textPosition="left">四条边</Divider>
      <HairLineBox position="all" style={{ width: 200, height: 150, margin: 20 }} />

      <Divider textPosition="left">圆角和颜色</Divider>
      <StyledHairline position="all" color="red" />

      <Divider textPosition="left">左边</Divider>
      <HairLineBox
        position="left"
        color="blue"
        style={{ width: 200, height: 150, marginLeft: 20 }}
      />

      <Divider textPosition="left">右边</Divider>
      <HairLineBox position="right" color="#00bc8d" style={{ width: 200, height: 150 }} />
    </div>
  );
}
