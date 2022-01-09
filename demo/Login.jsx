import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Toast, Input, styled, Button, HairLineBox, useCountdown, Icon } from 'react-uni-comps';

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

  const setFieldValue = useCallback((name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  }, []);

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
    <PageWrap>
      <DemoBlock title="登录">
        <StyledHairBox>
          <Input
            clearable
            type="number"
            placeholder="请输入手机号码"
            value={tel}
            onChange={(val) => setFieldValue('tel', val)}
          />
        </StyledHairBox>

        <StyledHairBox>
          <Input
            clearable
            placeholder="请输入验证码"
            value={code}
            onChange={(val) => setFieldValue('code', val)}
            maxLength={6}
            suffix={
              <Button as="a" ref={ref} onClick={isRunning ? null : start}>
                {isRunning ? countdown + '秒' : `${isReStarted ? '重新获取' : '获取验证码'}`}
              </Button>
            }
          />
        </StyledHairBox>

        <Button
          type="primary"
          block
          style={{
            borderRadius: 20,
            height: 36,
            margin: '20px auto',
          }}
          onClick={() => submit()}
        >
          登录
        </Button>
      </DemoBlock>
    </PageWrap>
  );
}
