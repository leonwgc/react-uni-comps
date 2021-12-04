import React, { useRef } from 'react';
import { Button, Toast, Icon, PopConfirm } from 'react-uni-comps';

export default function App() {
  const ref = useRef();
  return (
    <div style={{ margin: 20 }}>
      <PopConfirm
        ref={ref}
        placement="right"
        style={{ width: 300, height: 112, padding: '16px 20px', fontWeight: 500 }}
        icon={<Icon type="uc-icon-yiwen" />}
        title={<span style={{ fontSize: 12, color: '#111' }}>确定删除吗?</span>}
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
        title="确定发布此页面?"
        style={{ width: 300 }}
        onOk={() => {
          Toast.show('发布中..');
        }}
      >
        <Button style={{ position: 'fixed', left: 20, top: 300 }}>hello</Button>
      </PopConfirm>
    </div>
  );
}
