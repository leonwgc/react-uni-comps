import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
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
        <Drag onDragEnd={setPos} boundRef={boundRef}>
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

      <Drag>
        <StyledDiv>no bound</StyledDiv>
      </Drag>
    </div>
  );
}
