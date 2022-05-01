import React, { useState } from 'react';
import { Input, Icon, styled, Space, Toast, isMobile, Cell, Tooltip, Form } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';

//#region  styles
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2878668_3svlljpx94y.js');

const StyledInput = styled(Input)`
  &.pc {
    height: 36px;
    font-size: 14px;
    margin: 18px auto;
  }
  line-height: 45px;
  background: #f7f7f7;
  border-radius: 23px;
  margin: 12px 0;

  &.mobile {
    height: 45px;
    padding: 0 24px;

    input {
      line-height: 24px;
      height: 24px;
      font-size: 17px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #000000;
    }

    .suffix,
    .prefix {
      font-size: 21px;
      line-height: 21px;
    }

    .prefix {
      color: #8c8c8c;
      margin-right: 9px;
    }
  }

  &.pc {
    .suffix,
    .prefix {
      font-size: 18px;
      line-height: 18px;
    }
  }
`;

//#endregion

export default function App() {
  const [data, setData] = useState({ account: '', pwd: '', eyeOn: false });
  const { account = '', pwd = '', eyeOn } = data;

  const [val, setVal] = useState('');
  const [val1, setVal1] = useState('');

  const onFieldChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="默认">
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Input value={val} onChange={setVal} placeholder="受控" />

          <Input placeholder="非受控" />

          <Input onPressEnter={(value) => Toast.show(value)} placeholder="按下enter" />

          <Input defaultValue="只读" readOnly />

          <Input defaultValue="禁用" disabled />

          <Input
            value={val}
            onChange={setVal}
            clearable
            onClear={() => Toast.show('已清空')}
            placeholder="可清除"
          />

          <Input
            ime
            onChange={(value) => {
              setVal(value);
              console.log(value);
            }}
            value={val}
            placeholder="IME中文输入处理"
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="前后缀">
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Input prefix={<Icon type="uc-icon-gouwuche" />} suffix={'美刀'} defaultValue={'10'} />

          <Input
            prefix={<Icon type="uc-icon-gouwuche" />}
            suffix={
              <Tooltip title="hello,world">
                <Icon type="uc-icon-xinxi" />
              </Tooltip>
            }
            defaultValue={'10'}
          />

          <Input
            value={val}
            onChange={setVal}
            maxLength={12}
            suffix={<Space size={2}>{val.length} / 12</Space>}
            placeholder="显示输入长度"
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="多行">
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Input rows={2} />

          <Input rows={1} autoHeight value={val1} onChange={setVal1} placeholder="高度自适应" />
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义">
        <StyledInput
          clearable
          placeholder="请输入真实账号"
          value={account}
          onChange={onFieldChange('account')}
          prefix={!isMobile && <Icon type="icon-yonghu" />}
        />

        <StyledInput
          placeholder="请输入密码"
          value={pwd}
          type={eyeOn ? 'text' : 'password'}
          onChange={onFieldChange('pwd')}
          prefix={!isMobile && <Icon type="icon-lock_filled_regular" />}
          clearable
          suffix={
            <Icon
              className="icon"
              onClick={() => onFieldChange('eyeOn')(!eyeOn)}
              type={eyeOn ? 'icon-display_outlined_regular' : 'icon-hide_outlined_regular'}
            />
          }
        />
      </DemoBlock>
    </PageWrap>
  );
}
