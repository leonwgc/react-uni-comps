import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { CopyToClipboard, Button, Toast, copy, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock>
        <Space direction="vertical">
          <CopyToClipboard text="复制文本">
            <Button type="primary">复制文本</Button>
          </CopyToClipboard>

          <CopyToClipboard text="复制文本带回调" onCopy={() => Toast.show('copied')}>
            <Button type="primary">复制文本带回调</Button>
          </CopyToClipboard>

          <Button type="primary" onClick={() => copy('静态方法')}>
            静态方法
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
