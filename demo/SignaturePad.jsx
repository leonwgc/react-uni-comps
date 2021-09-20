import React, { useRef } from 'react';
import { SignaturePad, Divider, Button, Space } from '../src';

export default function App() {
  const ref = useRef();
  const imgRef = useRef();

  return (
    <div className="app" style={{ margin: '20px' }}>
      <Divider>默认竖屏</Divider>
      <SignaturePad ref={ref} style={{ width: '100%', height: 200, border: '1px solid #666' }} />
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
      <img ref={imgRef} />
    </div>
  );
}
