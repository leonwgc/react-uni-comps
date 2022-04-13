import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { CopyToClipboard, Button, Toast, nanoid, copy } from 'react-uni-comps';

export default function App() {
  const [value, setValue] = useState(`i love china ${nanoid(5)}`);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <CopyToClipboard text="i love china">
          <Button outlined>默认</Button>
        </CopyToClipboard>
      </DemoBlock>

      <DemoBlock title="带回调">
        <CopyToClipboard
          text="i love china callback"
          onCopy={() => Toast.show('i love china copied')}
        >
          <Button outlined>带回调</Button>
        </CopyToClipboard>
      </DemoBlock>

      <DemoBlock title="子元素带点击事件">
        <CopyToClipboard text="i love china click">
          <Button onClick={() => Toast.show('hi,there')}>子元素带点击事件</Button>
        </CopyToClipboard>
      </DemoBlock>

      <DemoBlock title="动态文本">
        <CopyToClipboard
          text={value}
          onClick={() => Toast.show(value)}
          onCopy={() => setValue(`i love china ${nanoid(5)}`)}
        >
          <Button outlined>{value}</Button>
        </CopyToClipboard>
      </DemoBlock>

      <DemoBlock title="静态方法: copy">
        <Button outlined onClick={() => copy('i love china copy')}>
          静态方法
        </Button>
      </DemoBlock>
    </PageWrap>
  );
}
