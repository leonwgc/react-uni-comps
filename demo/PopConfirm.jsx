import React, { useRef } from 'react';
import { Button, Toast, Icon } from '../src';
import PopConfirm from '../src/PopConfirm';

export default function App() {
  const ref = useRef();
  return (
    <div style={{ margin: '140px 100px 0' }}>
      <PopConfirm
        ref={ref}
        icon={<Icon type="uc-icon-yiwen" />}
        title={<span style={{ fontSize: 20 }}>确认删除吗?</span>}
        okText="ok"
        onOk={() => {
          Toast.show('you clicked ok');
          setTimeout(() => {
            ref.current.hide();
          }, 1200);
        }}
        cancelText="cancel"
        cancelButtonProps={{
          style: {
            border: '1px solid green',
            height: 28,
            width: 64,
          },
        }}
        onCancel={() => Toast.show('you cancelled')}
      >
        <a>删除</a>
      </PopConfirm>

      <PopConfirm
        title="确定发布此页面？确定发布此页面？"
        onOk={() => {
          Toast.show('发布中..');
        }}
      >
        <Button style={{ position: 'fixed', left: 100, top: 300 }}>hello</Button>
      </PopConfirm>
    </div>
  );
}
