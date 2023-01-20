import React, { useState, useRef, useEffect } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Input, InputNumber, Form, Button, useCountdown } from 'react-uni-comps';

export default function App() {
  const { countdown, isRunning, start, isReStarted } = useCountdown(60);

  const [result, setResult] = useState(null);

  const ref = useRef<any>();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="登录">
        <Form
          onFinish={setResult}
          toastError
          ref={ref}
          cellProps={{
            labelStyle: { border: '1px dashed red' },
          }}
        >
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: '请输入手机号码' },
              {
                pattern: /^1\d{10}$/,
                message: '请输入正确的手机号码',
              },
            ]}
          >
            <InputNumber placeholder="请输入手机号码" clearable maxLength={11} />
          </Form.Item>

          <Form.Item name="code">
            <Input
              clearable
              placeholder="请输入验证码"
              maxLength={6}
              suffix={
                <Button as="a" onClick={isRunning ? null : start}>
                  {isRunning ? countdown + '秒' : `${isReStarted ? '重新获取' : '获取验证码'}`}
                </Button>
              }
            />
          </Form.Item>

          <Button
            type="primary"
            block
            wait
            style={{
              borderRadius: 20,
              height: 36,
              margin: '20px auto',
            }}
          >
            登录
          </Button>
        </Form>
      </DemoBlock>
      <DemoBlock>{result ? JSON.stringify(result) : '请填写'}</DemoBlock>
    </PageWrap>
  );
}
