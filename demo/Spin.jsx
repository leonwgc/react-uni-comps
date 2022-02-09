import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Spin, Space, Button } from 'react-uni-comps';

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space wrap>
          <Spin style={{ color: 'red', fontSize: 30, margin: '0 20px' }}></Spin>
          <Spin style={{ fontSize: 32 }}></Spin>
          <Spin />
          文本XXX
          <Spin style={{ color: 'red', fontSize: 48 }}></Spin>
          <Spin style={{ color: '#005cff' }}></Spin>
          <Spin style={{ color: '#005cff', fontSize: 48 }}></Spin>
        </Space>
      </DemoBlock>

      <DemoBlock title="延迟显示">
        <Space wrap>
          等700ms显示
          <Spin style={{ color: '#005cff', fontSize: 30 }} wait></Spin>
          等1.5s显示
          <Spin style={{ color: '#005cff', fontSize: 30 }} wait={1500}></Spin>
        </Space>
      </DemoBlock>

      <DemoBlock title="根据条件延迟显示 (防闪烁)">
        <Space>
          <Button type="primary" onClick={() => setLoading(true)} loading={loading}>
            显示
          </Button>

          <Button onClick={() => setLoading(false)}>隐藏 </Button>
        </Space>

        <div style={{ marginTop: 24 }}>
          <Space wrap>
            等700ms显示
            <Spin wait loading={loading} style={{ color: '#005cff', fontSize: 30 }} wait></Spin>
            等1.5s显示
            <Spin
              wait={1500}
              loading={loading}
              style={{ color: '#005cff', fontSize: 30 }}
              wait={3000}
            ></Spin>
          </Space>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
