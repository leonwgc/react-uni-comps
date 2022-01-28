import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button, Input, Form, Toast } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="form" padding="0">
        <Form
          onFinish={(values) => {
            Toast.show(JSON.stringify(values));
          }}
          labelWidth={50}
        >
          <Form.Item
            label="姓名"
            name="username"
            rules={[
              { required: true, message: '请填写姓名' },
              {
                max: 5,
                message: '不能超过5个字',
              },
            ]}
          >
            <Input placeholder="请填写姓名" clearable />
          </Form.Item>

          <Form.Item label="密码" name="password">
            <Input placeholder="请填写密码" clearable />
          </Form.Item>

          <div style={{ padding: 12 }}>
            <Button type="primary" wait block>
              确定
            </Button>
          </div>
        </Form>
      </DemoBlock>
    </PageWrap>
  );
}
