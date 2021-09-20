import React from 'react';
import { Rate, Divider, Space, Toast } from '../src';
import { HeartOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <div className="app" style={{ margin: '20px' }}>
      <Divider>半星</Divider>
      <Rate defaultValue={2.5} allowHalf onChange={(v) => Toast.show(v, 800)} />
      <Divider>只读</Divider>
      <Rate readonly value={4} />
      <Divider>清除</Divider>
      <Space direction="vertical">
        <Space align="center">
          <Rate defaultValue={3} allowClear={true} onChange={(v) => Toast.show(v, 800)} />
          <div>可清除</div>
        </Space>
        <Space align="center">
          <Rate defaultValue={3} allowClear={false} onChange={(v) => Toast.show(v, 800)} />
          <div>不可清除</div>
        </Space>
      </Space>
      <Divider>自定义字符和样式</Divider>
      <Space direction="vertical">
        <Rate
          allowHalf
          defaultValue={3}
          character={<HeartOutlined />}
          onChange={(v) => Toast.show(v, 800)}
        />
        <Rate allowHalf defaultValue={1.5} character={'X'} onChange={(v) => Toast.show(v, 800)} />
        <Rate allowHalf defaultValue={3.5} character={'好'} onChange={(v) => Toast.show(v, 800)} />
      </Space>
    </div>
  );
}
