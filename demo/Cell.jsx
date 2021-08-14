import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Checkbox, Switch, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space, Cell } from 'react-uni-comps';

const StyledContent = styled.div`
  padding: 20px;
`;

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
    <StyledContent>
      <Cell label="姓名" content="汪guochao"></Cell>
      <Cell label="username">
        <input type="text" placeholder="username" />
      </Cell>
      <Cell label="antd输入框">
        <Input placeholder="antd输入框" />
        <QuestionCircleOutlined />
      </Cell>
      <Cell label="邮箱地址">
        <Input placeholder="邮箱地址" />
        @126.com
      </Cell>
      <Cell label="多行文本">
        <textarea
          placeholder="多行文本"
          maxLength={60}
          value={v}
          onChange={(e) => setV(e.target.value)}
        />
        <span>{v.length}/60</span>
      </Cell>
      <Cell label="多行文本auto-height">
        <textarea
          ref={ref}
          placeholder="多行文本"
          maxLength={60}
          value={v}
          onChange={(e) => setV(e.target.value)}
        />
        <span>{v.length}/60</span>
      </Cell>
      <Cell label="Checkbox">
        <Checkbox>Checkbox</Checkbox>
      </Cell>
      <Cell label="Switch">
        <Switch />
      </Cell>
      <Cell
        label={<div style={{ width: 200 }}>Set as the default contact</div>}
        content={<Switch />}
        lineColor="red"
      ></Cell>
      <Cell
        content={
          <Space>
            <div>
              <Switch /> on/off
            </div>
            <Button type="primary" shape="round" style={{ width: 120 }}>
              submit
            </Button>
          </Space>
        }
      ></Cell>
    </StyledContent>
  );
}
