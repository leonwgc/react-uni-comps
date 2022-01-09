import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { CopyToClipboard, Button, Space, Toast } from 'react-uni-comps';

export default function App() {
  const [value, setValue] = useState(new Date());
  return (
    <PageWrap>
      <DemoBlock title="copy">
        <Space direction="vertical" size={20}>
          <CopyToClipboard text="1590163430x" onCopy={() => Toast.show('copied')}>
            <Button active>1590163430x</Button>
          </CopyToClipboard>

          <CopyToClipboard
            text={value.toString()}
            onCopy={() => Toast.show(value.toLocaleString())}
          >
            <Button active>{value.toLocaleDateString()}</Button>
          </CopyToClipboard>

          <CopyToClipboard text="子元素带点击事件">
            <Button active onClick={() => Toast.show('子元素带点击事件')}>
              子元素带点击事件
            </Button>
          </CopyToClipboard>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
