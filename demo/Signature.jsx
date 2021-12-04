import React, { useRef } from 'react';
import { Signature, Divider, Button, Space } from 'react-uni-comps';

export default function App() {
  const ref = useRef();
  const imgRef = useRef();

  return (
    <div className="app" style={{ margin: '20px' }}>
      <Divider>竖屏</Divider>
      <Signature ref={ref} style={{ width: '100%', height: 200, border: '1px solid #eee' }} />
      <Space style={{ marginTop: 30 }}>
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
