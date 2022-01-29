import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Ripple, Button, AlertDialog } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="点击波纹效果">
        <Ripple
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
      <DemoBlock title="按钮">
        <Ripple>
          <Button>点击波纹效果</Button>
        </Ripple>
      </DemoBlock>
      <DemoBlock title="带点击事件按钮">
        <Ripple>
          <Button
            onClick={() => AlertDialog.show({ content: 'hi,there', onConfirm: (close) => close() })}
          >
            点击波纹效果
          </Button>
        </Ripple>
      </DemoBlock>
      <DemoBlock title="波纹颜色">
        <Ripple
          color="red"
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
    </PageWrap>
  );
}
