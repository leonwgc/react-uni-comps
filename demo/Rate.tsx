import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Rate, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space direction="vertical">
          <Rate />

          <Rate defaultValue={2.5} allowHalf />

          <Rate color="#005cff" defaultValue={5} count={6} />

          <Rate color="red" char="好" defaultValue={2.5} allowHalf />
        </Space>
      </DemoBlock>

      <DemoBlock title="只读">
        <Rate readonly value={4} />
      </DemoBlock>

      <DemoBlock title="清除">
        <Space direction="vertical">
          <Space align="center">
            <Rate defaultValue={3} allowClear />
            <div>可清除</div>
          </Space>

          <Space align="center">
            <Rate style={{ color: 'red' }} defaultValue={3} allowClear={false} />
            <div>不可清除</div>
          </Space>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
