import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/Block';
import { Divider } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <Block title="基础分割线">
        <Divider />
      </Block>

      <Block title="带内容的分割线">
        <Divider>默认内容在中间</Divider>
        <Divider textPosition="left">左侧内容</Divider>
        <Divider textPosition="right">右侧内容</Divider>
      </Block>

      <Block title="自定义样式">
        <Divider dashed color="#1677ff" style={{ color: 'red', fontSize: 20 }}>
          自定义样式
        </Divider>
      </Block>

      <Block title="垂直分隔线">
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" color="red" style={{ margin: '0 20px' }} />
        <a href="#">Link</a>
      </Block>
    </PageWrap>
  );
}
