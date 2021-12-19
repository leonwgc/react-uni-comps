import React from 'react';
import { Spin, Space } from 'react-uni-comps';

export default function App() {
  return (
    <Space wrap>
      <Spin style={{ color: 'red', fontSize: 30, margin: '0 20px' }}></Spin>
      <Spin style={{ fontSize: 32 }}></Spin>
      <Spin></Spin>
      <Spin style={{ color: 'red', fontSize: 48 }}></Spin>
      <Spin style={{ color: '#004bcc' }}></Spin>
      <Spin style={{ color: '#004bcc', fontSize: 48 }}></Spin>
    </Space>
  );
}
