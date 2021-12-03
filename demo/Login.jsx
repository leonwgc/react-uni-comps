import React, { useState, useRef } from 'react';
import { Toast, Input, styled, Button, HairLineBox, useCountdown } from '../src';

//#region  style

const isValidPhone = (tel = '') => {
  return /^1\d{10}$/.test(tel);
};

const StyledHairBox = styled(HairLineBox)`
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #cccccc;
  line-height: 22px;
  padding: 12px 0;
  input {
    font-size: 16px;
  }
`;

//#endregion

export default function App() {
  const [data, setData] = useState({ tel: '', code: '', name: '', pwd: '' });

  const { countdown, isRunning, start, isReStarted } = useCountdown(60);

  const ref = useRef(null);

  const { tel, code } = data;

  const onFieldChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  const submit = (force = false) => {
    const { tel, code } = data;
    if (!isValidPhone(tel)) {
      Toast.show('请输入正确的手机号码');
      return;
    }
    if (!code) {
      Toast.show('验证码不能为空');
      return;
    }

    console.log(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <StyledHairBox>
        <Input
          clearable
          type="number"
          placeholder="请输入手机号码"
          value={tel}
          onChange={onFieldChange('tel')}
        />
      </StyledHairBox>

      <StyledHairBox>
        <Input
          clearable
          placeholder="请输入验证码"
          value={code}
          onChange={onFieldChange('code')}
          maxLength={6}
          suffix={
            <a disabled={!isValidPhone(tel)} ref={ref} onClick={isRunning ? null : start}>
              {isRunning ? countdown + '秒' : `${isReStarted ? '重新获取' : '获取验证码'}`}
            </a>
          }
        />
      </StyledHairBox>

      <Button
        type="primary"
        block
        style={{
          borderRadius: 20,
          height: 32,
          margin: '20px auto',
        }}
        onClick={() => submit()}
      >
        登录
      </Button>
    </div>
  );
}
