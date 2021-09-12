import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { NumberKeyboard, Toast, Button, Space } from '../src';

export default function App() {
  const [form] = Form.useForm();
  const [text, setText] = useState('OK');

  return (
    <div className="app">
      <Form
        form={form}
        onFinish={(v) => {
          setText(v.text);
        }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Form.Item name="text" initialValue={text}>
            <Input />
          </Form.Item>
          <Button block type="primary" htmlType="submit">
            ok
          </Button>
        </Space>
      </Form>
      <NumberKeyboard okText={text} onClick={(k) => Toast.show(k, 200)} />
    </div>
  );
}
