import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Divider, Cell, Button, Checkbox, Switch } from '../src';
import useBgColor from './hooks/useBgColor';

const StyledApp = styled.div`
  .cell-title {
    /* width: 100px; */
  }
`;

export default function App() {
  const [v, setV] = useState('');
  const ref = useRef();

  useBgColor('#f7f8fa');

  useEffect(() => {
    // 实现 textarea  自适应内容高度
    ref.current.style.height = 'auto';
    ref.current.scrollTop = 0;
    ref.current.style.height = ref.current.scrollHeight + 'px';
  });

  return (
    <StyledApp>
      <Divider style={{ margin: 0 }}>base</Divider>
      <Cell title="Cell title" content="Content"></Cell>
      <Cell
        title="Cell title"
        lineColor="transparent"
        description="Description"
        content="Content"
      ></Cell>

      <Divider style={{ margin: 0 }}>input</Divider>

      <Cell
        title={
          <span>
            <span style={{ color: 'red' }}>*</span> 姓名
          </span>
        }
      >
        <input type="text" placeholder="username" />
      </Cell>
      <Cell title="antd输入框" description="antd">
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
      <Cell title="Checkbox" content={<Checkbox>Checkbox</Checkbox>}></Cell>
      <Cell title="Switch" content={<Switch />}></Cell>
      <Cell title="Checkbox">
        <Checkbox>Checkbox</Checkbox>
      </Cell>
      <Cell title="Switch" lineColor="transparent">
        <Switch />
      </Cell>

      <div style={{ padding: 12 }}>
        <Button type="primary" block>
          submit
        </Button>
      </div>
    </StyledApp>
  );
}
