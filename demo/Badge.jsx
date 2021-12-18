import React from 'react';
import PageWrap from './common/PageWrap';
import { Badge, Space, styled, Icon } from 'react-uni-comps';

const Box = styled.div`
  background: #eee;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 8px;
`;

export default function App() {
  return (
    <PageWrap>
      <Space size={30} wrap align="top">
        <Badge content="5">
          <Box />
        </Badge>

        <Badge content="新">
          <Box />
        </Badge>

        <Badge content="更新啦">
          <Box />
        </Badge>

        <Badge>
          <Box />
        </Badge>

        <Badge content={<Icon type="uc-icon-daoru" />}>
          <Box />
        </Badge>

        <Badge content={'hello'} badgeStyle={{ backgroundColor: '#ccc', color: 'red', padding: 5 }}>
          <Box />
        </Badge>

        <Badge content="5">文本</Badge>

        <Badge content="新">文本</Badge>

        <Badge badgeStyle={{ backgroundColor: 'blue' }}>文本</Badge>

        <Badge>文本</Badge>

        <Badge content="hello,world"></Badge>

        <Badge />
      </Space>
    </PageWrap>
  );
}
