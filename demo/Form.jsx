import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import Form, { Field } from 'rc-field-form';
import { Button, Input, Space, Toast, Cell } from 'react-uni-comps';

export default function App() {
  const [form] = Form.useForm();
  return (
    <PageWrap>
      <DemoBlock title="form">
        <Form
          onFinish={(values) => {
            console.log('Finish:', values);
          }}
          onFinishFailed={(err) => {
            Toast.show(err.errorFields[0].errors[0]);
          }}
        >
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <Cell title="姓名">
              <Field name="username" rules={[{ required: true, message: '请填写姓名' }]}>
                <Input placeholder="请填写姓名" />
              </Field>
            </Cell>

            <Cell title="密码">
              <Field name="password" rules={[{ required: true, message: '请填写密码' }]}>
                <Input placeholder="请填写密码" />
              </Field>
            </Cell>

            <Button block type="primary" wait>
              确定
            </Button>
          </Space>
        </Form>
      </DemoBlock>
    </PageWrap>
  );
}
