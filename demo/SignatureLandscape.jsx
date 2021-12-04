import React, { useRef } from 'react';
import { Signature, Button, Space, styled } from 'react-uni-comps';

// simulate landscape mode

const StyledOps = styled.div`
  position: fixed;
  top: 50%;
  left: calc(100% - 30px);
  transform: translate(-50%, -50%) rotate(90deg);
`;

export default function App() {
  const ref = useRef();
  const imgRef = useRef();

  return (
    <div>
      <Signature style={{ width: '100vw', height: '60vh' }} ref={ref} />
      <StyledOps>
        <Space>
          <Button
            onClick={() => {
              imgRef.current.src = '';
              ref.current.clear();
            }}
          >
            clear
          </Button>
          <Button
            onClick={() => {
              imgRef.current.src = ref.current.getData();
            }}
          >
            ok
          </Button>
        </Space>
      </StyledOps>

      <img style={{ transform: 'rotate(-90deg)' }} ref={imgRef} />
    </div>
  );
}
