import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { InputNumber, Input, Button, Space, useList, IconArrow, Icon, Form } from 'react-uni-comps';

const App = () => {
  const { list, add, remove, keys, update, moveUp, moveDown } = useList([{ name: '', age: '' }]);

  return (
    <PageWrap>
      <DemoBlock>
        <Form>
          {list.map((item, idx) => {
            return (
              <div key={keys[idx]}>
                <Space>
                  <Form.Item label="姓名">
                    <Input
                      value={item.name}
                      onChange={(value) => update(idx, { ...item, name: value })}
                    />
                  </Form.Item>

                  <Form.Item label="年龄">
                    <InputNumber
                      value={item.age}
                      onChange={(value) => update(idx, { ...item, age: value })}
                    />
                  </Form.Item>

                  {idx > 0 ? (
                    <>
                      <Button
                        as="a"
                        danger
                        icon={<Icon type="uc-icon-lajitong" />}
                        onClick={() => remove(idx)}
                      ></Button>
                      <Button
                        circle
                        icon={<IconArrow direction="top" />}
                        onClick={() => moveUp(idx)}
                      ></Button>
                    </>
                  ) : null}
                  {idx < list.length - 1 ? (
                    <Button
                      circle
                      icon={<IconArrow direction="bottom" />}
                      onClick={() => moveDown(idx)}
                    ></Button>
                  ) : null}
                </Space>
              </div>
            );
          })}
        </Form>
      </DemoBlock>

      <DemoBlock>
        <Space direction="vertical" size={24}>
          <Button type="primary" htmlType="button" onClick={() => add({ name: '', age: '' })}>
            添加
          </Button>

          <div>{JSON.stringify(list)}</div>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
};

export default App;
