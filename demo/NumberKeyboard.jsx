import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { NumberKeyboard, Toast, Button, Space, Switch } from '../src';

export default function App() {
  const [form] = Form.useForm();
  const [data, setData] = useState({});

  const { text = '确定', custkey = '.' } = data;

  return (
    <div style={{ padding: 16 }}>
      <Form form={form} onFinish={setData} layout="vertical">
        <Form.Item name="text" initialValue={text}>
          <Input />
        </Form.Item>
        <Form.Item name="custkey" initialValue={custkey}>
          <Input />
        </Form.Item>
        <Button block type="primary" htmlType="submit">
          ok
        </Button>
      </Form>
      <NumberKeyboard
        customKey={custkey}
        okText={text}
        onClick={(k) => Toast.show({ content: k, duration: 200 })}
      />
    </div>
  );
}
