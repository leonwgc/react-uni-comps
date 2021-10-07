import React, { useState, useRef, useEffect } from 'react';
import styled from '../src/styled';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  Divider,
  Cell,
  Button,
  Checkbox,
  Switch,
  Input,
  NumberKeyboard,
  RadioGroup,
  CheckboxGroup,
} from '../src';
import useBgColor from './hooks/useBgColor';

const StyledApp = styled.div``;

const options = [
  { label: '选项A', value: 0 },
  { label: '选项B', value: 1 },
  { label: '选项C', value: 2 },
];

export default function App() {
  const [v, setV] = useState('');
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState(['item1', 'item2', 'item3']);
  const [data, setData] = useState({});

  const [v1, setV1] = useState(1);
  const [v2, setV2] = useState([]);

  const { tel } = data;

  useBgColor('#f7f8fa');

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
        <Input type="text" placeholder="username" />
      </Cell>
      <Cell
        title={
          <span>
            <span style={{ color: 'red' }}>*</span> 手机号
          </span>
        }
      >
        <Input
          type="text"
          onFocus={(e) => {
            e.target.blur();
            setVisible(true);
          }}
          value={tel}
          placeholder="请输入手机号"
        />
      </Cell>
      <Cell title="antd输入框" description="antd">
        <Input placeholder="输入框" suffix={<QuestionCircleOutlined />} />
      </Cell>
      <Cell title="邮箱地址">
        <Input placeholder="邮箱地址" suffix={'@126.com'} />
      </Cell>
      <Cell title="多行文本">
        <Input
          textarea
          placeholder="多行文本"
          maxLength={60}
          autoHeight={false}
          value={v}
          suffix={<span>{v.length}/60</span>}
          onChange={(e) => setV(e.target.value)}
        />
      </Cell>
      <Cell title="多行文本auto-height">
        <Input
          textarea
          autoHeight
          placeholder="多行文本"
          maxLength={60}
          value={v}
          onChange={(e) => setV(e.target.value)}
          suffix={<span>{v.length}/60</span>}
        />
      </Cell>
      <Cell title="Checkbox" content={<Checkbox>Checkbox</Checkbox>}></Cell>
      <Cell title="Switch" content={<Switch />}></Cell>
      <Cell title="Checkbox">
        <Checkbox>Checkbox</Checkbox>
      </Cell>
      <Cell title="多选">
        <CheckboxGroup options={options} value={v2} onChange={setV2} />
      </Cell>
      <Cell title="多选按钮">
        <CheckboxGroup options={options} value={v2} onChange={setV2} button />
      </Cell>
      <Cell title="单选">
        <RadioGroup options={options} value={v1} onChange={setV1} />
      </Cell>
      <Cell title="单选按钮">
        <RadioGroup options={options} value={v1} onChange={setV1} button="fill" />
      </Cell>
      <Cell title="Switch" lineColor="transparent">
        <Switch />
      </Cell>

      <div style={{ padding: 12 }}>
        <Button type="primary" block>
          submit
        </Button>
      </div>
      <NumberKeyboard
        onClose={() => setVisible(false)}
        visible={visible}
        onChange={(value) => {
          setData((d) => ({ ...d, tel: value }));
        }}
      />
    </StyledApp>
  );
}
