import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { CircleSpin, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space>
          <CircleSpin />
          <CircleSpin size={48} />
          <CircleSpin color="red" />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
