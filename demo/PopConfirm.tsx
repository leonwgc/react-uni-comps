import React, { useRef, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Toast, Icon, PopConfirm, Cell, Switch } from 'react-uni-comps';

export default function App() {
  const ref = useRef<any>();
  const [animate, setAnimate] = useState(true);

  return (
    <PageWrap>
      <Cell
        title="动画效果"
        content={<Switch checked={animate} onChange={(c) => setAnimate(c)}></Switch>}
      ></Cell>

      <DemoBlock title="默认">
        <PopConfirm
          placement="bottom-left"
          animate={animate}
          title="确定执行此操作?"
          style={{ width: '75%' }}
          onOk={() => {
            Toast.show('操作成功');
          }}
          onCancel={() => {
            Toast.show('取消执行');
          }}
        >
          <Button>操作</Button>
        </PopConfirm>
      </DemoBlock>
    </PageWrap>
  );
}
