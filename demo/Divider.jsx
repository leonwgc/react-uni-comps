import React from 'react';
import { Divider } from 'react-uni-comps';

export default function App() {
  return (
    <div style={{ padding: '0 16px' }}>
      <p>hello,world</p>
      <Divider color="#00bc8d" style={{ margin: '16px 0' }} />
      <p>hello,world</p>

      <Divider dashed style={{ margin: '10px 0' }} />

      <Divider dashed>Hello</Divider>
      <Divider color="red" style={{ margin: '20px 0' }}>
        设置线条颜色
      </Divider>
      <Divider textPosition="left">Hello left</Divider>
      <Divider textPosition="right">Hello right</Divider>

      <Divider dashed style={{ margin: '24px 0' }}>
        <span style={{ fontWeight: 500, fontSize: 16, color: 'red' }}>虚线</span>
      </Divider>
      <Divider style={{ margin: '32px 0' }}>垂直分隔线</Divider>
      <div>
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" color="red" style={{ margin: '0 20px' }} />
        <a href="#">Link</a>
      </div>
    </div>
  );
}
