import React, { useRef } from 'react';
import { Button, Toast, Icon, PopConfirm } from '../src';

export default function App() {
  const ref = useRef();
  return (
    <div style={{ margin: '140px 100px 0' }}>
      <PopConfirm
        ref={ref}
        placement="right"
        style={{ width: 300 }}
        icon={<Icon type="uc-icon-yiwen" />}
        title={<span style={{ fontSize: 20 }}>确定删除吗?</span>}
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
            height: 30,
          },
        }}
        onCancel={() => Toast.show('you cancelled')}
      >
        <a>删除</a>
      </PopConfirm>

      <PopConfirm
        placement="right"
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
