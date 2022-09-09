import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Empty, styled, AutoCenter, Button } from 'react-uni-comps';

const StyledEmpty1 = styled(Empty)`
  border: 1px solid #eee;
  padding: 20px 0;
  width: 50vw;
  .image {
    width: 92px;
  }
`;

const StyledEmpty2 = styled(Empty)`
  .image {
    width: 240px;
  }
  .desc {
    color: #999;
    margin: 16px auto;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <Block title="默认">
        <Empty />
      </Block>

      <Block title="例2">
        <AutoCenter>
          <StyledEmpty1 />
        </AutoCenter>
      </Block>

      <Block title="例3">
        <AutoCenter>
          <StyledEmpty2
            image="https://t7.baidu.com/it/u=2808499218,4024510450&fm=193&f=GIF"
            desc="暂无数据"
            extra={<Button type="primary">返回首页</Button>}
          />
        </AutoCenter>
      </Block>
    </PageWrap>
  );
}
