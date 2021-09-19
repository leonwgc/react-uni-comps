import React, { useRef } from 'react';
import { SignaturePad, Divider, Button, Space } from '../src';

export default function App() {
  const ref = useRef();
  const imgRef = useRef();

  return (
    <div className="app" style={{ margin: '20px' }}>
      <Divider>cust style</Divider>
      <SignaturePad ref={ref} style={{ width: '100%', height: 200, border: '1px solid red' }} />
      <Divider>横屏书写（取消注释） </Divider>
      {/* <SignaturePad style={{ width: 600, height: 600 }} landscape ref={ref} /> */}
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
            imgRef.current.src = ref.current.getDataUrl();
          }}
        >
          ok
        </Button>
      </Space>
      <img ref={imgRef} />
    </div>
  );
}
