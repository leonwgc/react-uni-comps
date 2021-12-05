import React, { useRef } from 'react';
import { Signature, Button, Space } from 'react-uni-comps';

export default function App() {
  const ref = useRef();
  const imgRef = useRef();

  return (
    <div className="app">
      <Signature ref={ref} style={{ width: '100%', height: 300, border: '1px solid #eee' }} />
      <Space style={{ display: 'flex', justifyContent: 'center', margin: '24px auto' }}>
        <Button
          onClick={() => {
            imgRef.current.src = '';
            ref.current.clear();
          }}
        >
          清除
        </Button>
        <Button
          type="primary"
          onClick={() => {
            imgRef.current.src = ref.current.getData();
          }}
        >
          确定
        </Button>
      </Space>
      <img ref={imgRef} />
    </div>
  );
}
