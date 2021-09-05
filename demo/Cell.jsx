import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space, Cell, Button, Checkbox, Switch } from '../src';

export default function App() {
  const [v, setV] = useState('');
  const ref = useRef();

  useEffect(() => {
    // 实现 textarea  自适应内容高度
    ref.current.style.height = 'auto';
    ref.current.scrollTop = 0;
    ref.current.style.height = ref.current.scrollHeight + 'px';
  });

  return (
    <div>
      <Cell title="姓名" content="汪guochao"></Cell>
      <Cell title="username">
        <input type="text" placeholder="username" />
      </Cell>
      <Cell title="antd输入框">
        <Input placeholder="antd输入框" />
        <QuestionCircleOutlined />
      </Cell>
      <Cell title="邮箱地址">
        <Input placeholder="邮箱地址" />
        @126.com
      </Cell>
      <Cell title="多行文本">
        <textarea
          placeholder="多行文本"
          maxLength={60}
          value={v}
          onChange={(e) => setV(e.target.value)}
        />
        <span>{v.length}/60</span>
      </Cell>
      <Cell title="多行文本auto-height">
        <textarea
          ref={ref}
          placeholder="多行文本"
          maxLength={60}
          value={v}
          onChange={(e) => setV(e.target.value)}
        />
        <span>{v.length}/60</span>
      </Cell>
      <Cell title="Checkbox">
        <Checkbox>Checkbox</Checkbox>
      </Cell>
      <Cell title="Switch">
        <Switch />
      </Cell>
      <Cell
        title={<div style={{ width: 200 }}>Set as the default contact</div>}
        content={<Switch />}
        lineColor="#00bd8d"
      ></Cell>
      <div style={{ padding: 12 }}>
        <Button type="primary" block style={{ height: 44 }}>
          submit
        </Button>
      </div>
    </div>
  );
}
