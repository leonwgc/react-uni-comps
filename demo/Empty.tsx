import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Empty, styled, AutoCenter } from 'react-uni-comps';

const StyledE = styled(Empty)`
  border: 1px solid #eee;
  width: 50vw;
  .img {
    width: 92px;
  }
  .desc {
    color: red;
    font-size: 12px;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <Block title="默认">
        <Empty />
      </Block>

      <Block title="自定义样式">
        <AutoCenter>
          <StyledE />
        </AutoCenter>
      </Block>
    </PageWrap>
  );
}
