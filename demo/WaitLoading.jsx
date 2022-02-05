import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button, Space, WaitLoading, Spin } from 'react-uni-comps';

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <PageWrap>
      <DemoBlock title="延迟渲染子元素">
        <Space>
          <Button type="primary" onClick={() => setLoading(true)} loading={loading}>
            700ms后显示 loading
          </Button>

          <Button onClick={() => setLoading(false)}>隐藏loading </Button>
        </Space>

        <div style={{ marginTop: 24 }}>
          <WaitLoading visible={loading}>
            <Spin style={{ fontSize: 30, color: '#00bc8d' }} />
          </WaitLoading>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
