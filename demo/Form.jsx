import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button, Input, Space, Toast, Cell, Form, Field } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="form" padding="0">
        <Form
          onFinish={(values) => {
            console.log('Finish:', values);
          }}
          onFinishFailed={(err) => {
            Toast.show(err.errorFields[0].errors[0]);
          }}
        >
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <Cell label="姓名" labelWidth={50} required>
              <Field name="username" rules={[{ required: true, message: '请填写姓名' }]}>
                <Input placeholder="请填写姓名" clearable />
              </Field>
            </Cell>

            <Cell label="密码" labelWidth={50} required>
              <Field name="password" rules={[{ required: true, message: '请填写密码' }]}>
                <Input placeholder="请填写密码" clearable />
              </Field>
            </Cell>

            <div style={{ padding: 12 }}>
              <Button type="primary" wait block>
                确定
              </Button>
            </div>
          </Space>
        </Form>
      </DemoBlock>
    </PageWrap>
  );
}
