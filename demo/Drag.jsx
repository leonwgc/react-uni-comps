import React, { useEffect, useState, useRef } from 'react';
import styled  from '../src/styled';
import { Space, Switch, Drag } from '../src';

const StyledDiv = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #00bd8c;
  font-size: 12px;
  color: #333;
`;

export default function App() {
  const [pos, setPos] = useState();
  const boundRef = useRef();
  const elNoBoundRef = useRef();
  return (
    <div>
      <div
        ref={boundRef}
        style={{
          position: 'relative',
          left: 100,
          top: 100,
          border: '1px solid red',
          width: 300,
          height: 300,
        }}
      >
        <Drag onDragEnd={(e, p) => setPos(p)} boundRef={boundRef}>
          <StyledDiv>
            {pos ? (
              <span>
                top:{pos.top},left:{pos.left}
              </span>
            ) : (
              'bound'
            )}
          </StyledDiv>
        </Drag>
      </div>

      <Drag
        onDragStart={(e) => {
          e.target.style.borderColor = 'blue';
        }}
        onDragEnd={(e) => {
          e.target.style.borderColor = 'green';
        }}
      >
        <StyledDiv ref={elNoBoundRef}>no bound</StyledDiv>
      </Drag>
    </div>
  );
}
