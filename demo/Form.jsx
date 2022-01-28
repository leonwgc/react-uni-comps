import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Input, Form, Button, useCountdown } from 'react-uni-comps';

export default function App() {
  const { countdown, isRunning, start, isReStarted } = useCountdown(60);

  const [result, setResult] = useState(null);

  return (
    <PageWrap>
      <DemoBlock title="登录">
        <Form onFinish={setResult} toastError>
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
            <Input placeholder="请输入手机号码" clearable />
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
