import React, { useState, useRef, useEffect } from 'react';
import styled from '../src/styled';
import { useCountdown } from 'react-use-lib';
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
  Radio,
  Toast,
} from '../src';
import useBgColor from './hooks/useBgColor';

const StyledApp = styled.div``;

const options2 = [
  { label: '选项A', value: 0 },
  { label: '选项B', value: 1 },
  { label: '选项C', value: 2 },
];

export default function App() {
  const [v, setV] = useState('');
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [options, setOptions] = useState(['item1', 'item2', 'item3']);
  const [data, setData] = useState({});

  const [v1, setV1] = useState('item2');
  const [v2, setV2] = useState([2]);

  const { countdown, started, start, stop } = useCountdown({
    defaultCountdown: 15,
  });

  const { tel, id } = data;

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
        <Input type="text" placeholder="请输入用户名" />
      </Cell>
      <Cell
        title={
          <span>
            <span style={{ color: 'red' }}>*</span> 手机号
          </span>
        }
      >
        <Input
          onFocus={(e) => {
            e.target.blur();
            setVisible(true);
          }}
          value={tel}
          placeholder="请输入手机号"
        />
      </Cell>
      <Cell
        title={
          <span>
            <span style={{ color: 'red' }}>*</span> 身份证
          </span>
        }
      >
        <Input
          onFocus={(e) => {
            e.target.blur();
            setVisible1(true);
          }}
          value={id}
          placeholder="请输入身份证"
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
      <Cell title="Radio" content={<Radio>hello</Radio>}></Cell>
      <Cell title="Switch" content={<Switch />}></Cell>
      <Cell title="Checkbox">
        <Checkbox>Checkbox</Checkbox>
      </Cell>
      <Cell title="多选">
        <CheckboxGroup options={options2} value={v2} onChange={setV2} />
      </Cell>
      <Cell title="多选按钮">
        <CheckboxGroup options={options2} value={v2} onChange={setV2} button />
      </Cell>
      <Cell title="单选">
        <RadioGroup options={options} value={v1} onChange={setV1} />
      </Cell>
      <Cell title="单选按钮">
        <RadioGroup options={options} value={v1} onChange={setV1} button="fill" />
      </Cell>
      <Cell title="短信验证码">
        <Input
          placeholder="请输入验证码"
          maxLength={6}
          suffix={
            <span style={{ color: '#FF5D0D' }} onClick={started ? null : start}>
              {started ? countdown + '秒' : '获取验证码'}
            </span>
          }
        />
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
        maxLength={11}
        visible={visible}
        onChange={(value) => {
          setData((d) => ({ ...d, tel: value }));
        }}
        onOk={(val) => {
          Toast.show({ content: val, duration: 1000 });
        }}
      />
      <NumberKeyboard
        onClose={() => setVisible1(false)}
        maxLength={18}
        visible={visible1}
        customKey="X"
        onChange={(value) => {
          setData((d) => ({ ...d, id: value }));
        }}
        onOk={(val) => {
          Toast.show({ content: val, duration: 1000 });
        }}
      />
    </StyledApp>
  );
}
