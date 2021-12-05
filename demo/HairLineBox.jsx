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
    <div className="app">
      <Divider>all</Divider>
      <HairLineBox position="all" style={{ width: 200, height: 150, margin: 20 }} />
      <Divider>radius & color</Divider>
      <StyledHairline position="all" color="red" />

      <Divider>left</Divider>
      <HairLineBox
        position="left"
        color="blue"
        style={{ width: 200, height: 150, marginLeft: 20 }}
      />

      <Divider>right</Divider>
      <HairLineBox position="right" color="#00bc8d" style={{ width: 200, height: 150 }} />
    </div>
  );
}
