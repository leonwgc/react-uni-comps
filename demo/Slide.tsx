import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Slide, styled } from 'react-uni-comps';

const colors = ['rgb(0, 188, 112)', 'rgb(24, 144, 255)', 'rgb(245, 34, 45)', 'rgb(113, 47, 209)'];

const StyledCard = styled.div`
  height: 200px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
`;

export default function App() {
  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="水平">
        <Slide autoPlay direction="horizontal">
          {colors.map((item, index) => (
            <StyledCard style={{ background: item }}>{index + 1}</StyledCard>
          ))}
        </Slide>
      </DemoBlock>

      <DemoBlock title="垂直">
        <Slide interval={1000} autoPlay direction="vertical">
          {colors.map((item, index) => (
            <StyledCard style={{ background: item }}>{index + 1}</StyledCard>
          ))}
        </Slide>
      </DemoBlock>
    </PageWrap>
  );
}
