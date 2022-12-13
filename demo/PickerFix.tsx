import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import { Picker, useUpdateEffect, Button, Input, Form, useMount } from 'react-uni-comps';

const fghData = [
  '行政第一分工会',
  '行政第二分工会',
  '产品&研究体系分工会',
  '销售&服务体系分工会',
  '品牌&营销体系分工会',
  '运营分工会',
  '物管服务分工会',
  '供应链体系行政分工会',
  '电器一厂分工会',
  '电器二厂分工会',
  '燃气工厂分工会',
  '电器三厂分工会',
  '柏厨分工会',
  '海外分工会',
].map((v) => ({ label: v, value: v }));

export default function App() {
  const [visible, setVisible] = React.useState(false);

  const [fgh, setFgh] = React.useState('');
  const [initValues, setInitValues] = React.useState({ fgh: '', name: '' });

  const ref = useRef(null);

  useUpdateEffect(() => {
    ref.current.resetFields();
  }, [initValues]);

  useMount(() => {
    setInitValues({ fgh: '', name: 'wgc' });
    // setFgh('运营分工会');
  });

  return (
    <PageWrap>
      <Form
        ref={ref}
        onFinish={(values) => {
          console.log(values);
        }}
        initialValues={initValues}
      >
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: '请填写真实姓名' }]}>
          <Input placeholder="请填写真实姓名" />
        </Form.Item>
        <Form.Item label="分工会" name="fgh" rules={[{ required: true, message: '请选择分工会' }]}>
          <Input
            placeholder="请选择分工会"
            readOnly
            onClick={() => {
              setVisible(true);
            }}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          wait
          block
          style={{ height: 42, fontSize: 17, marginTop: 26 }}
        >
          确认
        </Button>
      </Form>
      <Picker
        visible={visible}
        onClose={() => setVisible(false)}
        value={[fgh]}
        onOk={(ar) => {
          setFgh(ar[0]);
          ref.current.setFieldsValue({ fgh: ar[0] });
          setVisible(false);
        }}
        data={fghData}
      />
    </PageWrap>
  );
}
