import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button, Toast, Icon, PopConfirm, Space } from 'react-uni-comps';

export default function App() {
  const ref = useRef();
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <PopConfirm
          placement="bottom-left"
          title="确定发布此页面?"
          style={{ width: 300 }}
          onOk={() => {
            Toast.show('发布中..');
          }}
        >
          <Button active>默认</Button>
        </PopConfirm>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <PopConfirm
          ref={ref}
          placement="right"
          icon={<Icon type="uc-icon-yiwen" />}
          title="确定删除吗?"
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
          style={{ width: 260 }}
          onCancel={() => Toast.show('you cancelled')}
        >
          <Button active>自定义样式</Button>
        </PopConfirm>
      </DemoBlock>
    </PageWrap>
  );
}
