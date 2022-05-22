import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Spin, Space, Button } from 'react-uni-comps';

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Spin />
      </DemoBlock>

      <DemoBlock title="大小和颜色">
        <Space>
          <Spin style={{ fontSize: 24 }}></Spin>

          <Spin style={{ fontSize: 32, color: 'red' }}></Spin>

          <Spin style={{ fontSize: 40, color: '#005cff' }}></Spin>
        </Space>
      </DemoBlock>

      <DemoBlock title="延迟显示">
        <Space wrap>
          等1.5s显示
          <Spin wait={1500}></Spin>
        </Space>
      </DemoBlock>

      <DemoBlock title="配置loading显示">
        <Space>
          <Button type="primary" onClick={() => setLoading(true)}>
            显示
          </Button>

          <Button onClick={() => setLoading(false)}>隐藏 </Button>
        </Space>

        <div>
          <Spin wait loading={loading}></Spin>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
