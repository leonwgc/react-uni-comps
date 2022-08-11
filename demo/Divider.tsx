import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Divider, Space, Button } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <Block title="默认">
        <Divider />
      </Block>

      <Block title="带内容">
        <Divider>中间</Divider>
        <Divider textPosition="left">左侧</Divider>
        <Divider textPosition="right">右侧</Divider>
      </Block>

      <Block title="自定义颜色">
        <Divider color="red" />
      </Block>

      <Block title="自定义样式">
        <Divider style={{ color: 'red' }}>自定义样式</Divider>
      </Block>
      <Block title="垂直分隔线">
        <Divider type="vertical" />
      </Block>

      <Block title="垂直分隔线搭配Space组件">
        <Space split={<Divider type="vertical" />}>
          <Button as="a">Link</Button>
          <Button as="a">Link</Button>
          <Button as="a">Link</Button>
        </Space>
      </Block>
    </PageWrap>
  );
}
