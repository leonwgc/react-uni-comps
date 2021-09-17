import React, { useState, useref, useRef } from 'react';
import { Space, Divider, Input } from '../src';
import { SoundOutlined } from '@ant-design/icons';

export default function App() {
  const [v, setV] = useState('');
  return (
    <div className="app" style={{ margin: '20px' }}>
      <Divider>default</Divider>
      <Input placeholder="请输入内容"></Input>
      <Divider>prefix/suffix</Divider>
      <Input
        value={v}
        maxLength={10}
        style={{ marginBottom: 10 }}
        onChange={(e) => setV(e.target.value)}
        prefix={
          <span>
            <SoundOutlined />
            名字
          </span>
        }
        suffix={v.length + ' / 10'}
      ></Input>

      <Input style={{ marginBottom: 10 }} defaultValue="123"></Input>

      <Input style={{ marginBottom: 10 }} prefix={'password'} type="password"></Input>

      <Input style={{ marginBottom: 10 }} prefix={'number'} type="number"></Input>

      <Divider>suffix</Divider>
      <Input
        value={v}
        maxLength={10}
        onChange={(e) => setV(e.target.value)}
        suffix={v.length + ' / 10'}
      ></Input>
      <Divider>textarea</Divider>
      <Input
        style={{ marginBottom: 20 }}
        textarea
        value={v}
        maxLength={10}
        onChange={(e) => setV(e.target.value)}
      ></Input>

      <Input
        textarea
        value={v}
        maxLength={10}
        onChange={(e) => setV(e.target.value)}
        suffix={v.length + ' / 10'}
      ></Input>
    </div>
  );
}
