import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Signature, Button, Space } from 'react-uni-comps';
import type { SigPadRef } from 'react-uni-comps/es/Signature';

export default function App() {
  const ref = useRef<SigPadRef>();
  const imgRef = useRef<HTMLImageElement>();

  return (
    <PageWrap>
      <DemoBlock title="竖屏手写签名" padding={0}>
        <Signature
          ref={ref}
          penColor="red"
          padColor="#eee"
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
      </DemoBlock>
    </PageWrap>
  );
}