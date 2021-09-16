import React, { useState, useref, useRef } from 'react';
import { Space, Divider } from '../src';
import { SoundOutlined } from '@ant-design/icons';
import Input from '../src/Input';

export default function App() {
  const [v, setV] = useState('');
  return (
    <div className="app" style={{ margin: '20px' }}>
      <Divider>default</Divider>
      <Input></Input>
      <Divider>prefix/suffix</Divider>
      <Input
        value={v}
        maxLength={10}
        onChange={(e) => setV(e.target.value)}
        prefix={
          <span>
            <SoundOutlined />
            名字
          </span>
        }
        suffix={v.length + ' / 10'}
      ></Input>
      <Divider>suffix</Divider>
      <Input
        value={v}
        maxLength={10}
        onChange={(e) => setV(e.target.value)}
        suffix={v.length + ' / 10'}
      ></Input>
    </div>
  );
}
