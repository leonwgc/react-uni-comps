import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { styled, Drag } from 'react-uni-comps';

const StyledDiv = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #00bd8c;
  font-size: 12px;
  color: #333;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export default function App() {
  const [pos, setPos] = useState();
  const boundRef = useRef();
  const elNoBoundRef = useRef();
  return (
    <PageWrap>
      <DemoBlock title="任意拖动" height={200}>
        <Drag
          onDragStart={(e) => {
            e.target.style.borderColor = 'blue';
          }}
          onDragEnd={(e) => {
            e.target.style.borderColor = 'green';
          }}
        >
          <StyledDiv ref={elNoBoundRef}>任意拖动</StyledDiv>
        </Drag>
      </DemoBlock>

      <DemoBlock title="框内拖动">
        <div
          ref={boundRef}
          style={{
            position: 'relative',
            border: '1px solid red',
            width: 300,
            height: 300,
          }}
        >
          <Drag onDragEnd={(e, p) => setPos(p)} boundRef={boundRef}>
            <StyledDiv>框内拖动</StyledDiv>
          </Drag>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
