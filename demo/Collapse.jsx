import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Collapse, Space, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="手风琴">
        <Collapse animated>
          <Collapse.Item title="Header of Item1">
            This is content of item1. This is content of item1. This is content of item1.
          </Collapse.Item>
          <Collapse.Item title="Header of Item2" disabled>
            This is content of item2. This is content of item2. This is content of item2.
          </Collapse.Item>
          <Collapse.Item title="Header of Item3">
            This is content of item3. This is content of item3. This is content of item3.
          </Collapse.Item>
        </Collapse>
      </DemoBlock>

      <DemoBlock title="自定义标题">
        <Collapse animated>
          <Collapse.Item title="Header of Item1">
            This is content of item1. This is content of item1. This is content of item1.
          </Collapse.Item>
          <Collapse.Item
            title={(active) => {
              return (
                <Space>
                  <Icon type={active ? 'uc-icon-xianshi' : 'uc-icon-yincang'} /> 自定义标题
                </Space>
              );
            }}
            arrow={false}
          >
            This is content of item3. This is content of item3. This is content of item3.
          </Collapse.Item>
          <Collapse.Item title="没有箭头" arrow={false}>
            This is content of item3. This is content of item3. This is content of item3.
          </Collapse.Item>
        </Collapse>
      </DemoBlock>

      <DemoBlock title="多选">
        <Collapse keys={[]} onChange={console.log}>
          <Collapse.Item key="0" title="Header of Item1">
            This is content of item1. This is content of item1. This is content of item1.
          </Collapse.Item>
          <Collapse.Item key="1" title="Header of Item2">
            This is content of item2. This is content of item2. This is content of item2.
          </Collapse.Item>
          <Collapse.Item key="2" title="Header of Item3">
            This is content of item3. This is content of item3. This is content of item3.
          </Collapse.Item>
        </Collapse>
      </DemoBlock>

      <DemoBlock title="多选(默认展开)">
        <Collapse animated keys={['0', '2']} onChange={console.log}>
          <Collapse.Item key="0" title="Header of Item1">
            <div style={{ background: '#fff', height: 100 }}>
              This is content of item1. This is content of item1. This is content of item1.
            </div>
          </Collapse.Item>
          <Collapse.Item key="1" title="Header of Item2">
            This is content of item2. This is content of item2. This is content of item2.
          </Collapse.Item>
          <Collapse.Item key="2" title="Header of Item3">
            This is content of item3. This is content of item3. This is content of item3.
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
    </PageWrap>
  );
}
