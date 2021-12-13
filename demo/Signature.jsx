import React, { useRef } from 'react';
import { Signature, Button, Space, Divider } from 'react-uni-comps';

export default function App() {
  const ref = useRef();
  const imgRef = useRef();

  return (
    <div className="app">
      <Divider>竖屏手写签名</Divider>
      <Signature
        ref={ref}
        penColor="red"
        padColor="lightgreen"
        style={{ width: '100%', height: 300, border: '1px solid #eee' }}
      />
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
        <Button
          as="a"
          onClick={() => {
            ref.current.download('hello.jpg');
          }}
        >
          下载
        </Button>
      </Space>
      <img ref={imgRef} />
    </div>
  );
}
