import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { styled, Drag } from 'react-uni-comps';

const StyledDiv = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #005cff;
  font-size: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export default function App() {
  const boundRef = useRef();

  return (
    <PageWrap>
      <DemoBlock title="任意拖动" height={128}>
        <Drag>
          <StyledDiv>任意拖动</StyledDiv>
        </Drag>
      </DemoBlock>

      <DemoBlock title="框内拖动">
        <div
          ref={boundRef}
          style={{
            position: 'relative',
            border: '1px dashed #ccc',
            width: 260,
            height: 260,
          }}
        >
          <Drag boundRef={boundRef}>
            <StyledDiv>框内拖动</StyledDiv>
          </Drag>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
