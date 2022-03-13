import React, { useState } from 'react';
import {
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
  useCountdown,
  Icon,
} from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import useBgColor from './hooks/useBgColor';

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

  const { countdown, isRunning, start, isReStarted } = useCountdown(5);

  const { tel, id } = data;

  useBgColor('#f7f8fa');

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="基础" padding="0">
        <Cell label="Cell label" content="Content"></Cell>
        <Cell
          label="Cell label"
          lineColor="red"
          description="最终正式稳定版会在macOS 11.0发布后才会发布，到时候会加入对Intel的支持。另外，甚至在苹果手机里也能运行！！不过苹果手机速度只能达到N年前的显卡的水平"
        ></Cell>
      </DemoBlock>

      <DemoBlock title="输入" padding="0">
        <Cell label="姓名" required>
          <Input type="text" placeholder="请输入用户名" />
        </Cell>
        <Cell label="手机号" required>
          <Input
            onFocus={(e) => {
              e.target.blur();
              setVisible(true);
            }}
            value={tel}
            placeholder="请输入手机号"
          />
        </Cell>
        <Cell label="身份证" required>
          <Input
            onFocus={(e) => {
              e.target.blur();
              setVisible1(true);
            }}
            value={id}
            placeholder="请输入身份证"
          />
        </Cell>
        <Cell label="antd输入框" description="antd">
          <Input placeholder="输入框" suffix={<Icon type="uc-icon-yiwen" />} />
        </Cell>
        <Cell label="邮箱地址">
          <Input placeholder="邮箱地址" suffix={'@126.com'} />
        </Cell>
        <Cell label="多行文本">
          <Input
            textarea
            placeholder="多行文本"
            maxLength={60}
            autoHeight={false}
            value={v}
            suffix={<span>{v.length}/60</span>}
            onChange={(v) => setV(v)}
          />
        </Cell>
        <Cell label="多行文本auto-height">
          <Input
            textarea
            autoHeight
            placeholder="多行文本"
            maxLength={60}
            value={v}
            onChange={(v) => setV(v)}
            suffix={<span>{v.length}/60</span>}
          />
        </Cell>
        <Cell label="Radio" content={<Radio>hello</Radio>}></Cell>
        <Cell label="Radio" description="as children">
          <Radio />
        </Cell>
        <Cell label="Switch" content={<Switch />}></Cell>
        <Cell label="Checkbox" content={<Checkbox />}></Cell>
        <Cell label="Checkbox" description="as children">
          <Checkbox />
        </Cell>
        <Cell label="多选">
          <CheckboxGroup options={options2} value={v2} onChange={setV2} />
        </Cell>
        <Cell label="多选按钮">
          <CheckboxGroup options={options2} value={v2} onChange={setV2} button />
        </Cell>
        <Cell label="单选">
          <RadioGroup options={options} value={v1} onChange={setV1} />
        </Cell>
        <Cell label="单选按钮">
          <RadioGroup options={options} value={v1} onChange={setV1} button="fill" />
        </Cell>
        <Cell label="短信验证码">
          <Input
            placeholder="请输入验证码"
            maxLength={6}
            suffix={
              <span style={{ color: '#FF5D0D' }} onClick={start}>
                {isRunning ? countdown + '秒' : `${isReStarted ? '重新获取' : '获取验证码'}`}
              </span>
            }
          />
        </Cell>
        <Cell label="Switch" lineColor="transparent">
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
            Toast.show(val);
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
            Toast.show(val);
          }}
        />
      </DemoBlock>
    </PageWrap>
  );
}
