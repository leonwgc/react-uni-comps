import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Result, styled, Icon, Button } from 'react-uni-comps';

const StyledResult0 = styled(Result)`
  .image {
    color: #52c41a;
    font-size: 72px;
  }
  .desc {
    font-size: 18px;
    margin: 12px auto;
  }
`;

const StyledResult = styled(Result)`
  .image {
    width: 200px;
  }
  .desc {
    font-size: 18px;
    margin: 12px auto;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <Block title="例1">
        <StyledResult0 image={<Icon type="uc-icon-zhengque" />} desc="提交成功" />
      </Block>

      <Block title="例2">
        <StyledResult
          image="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
          desc="提交成功"
          extra={<Button type="primary">返回</Button>}
        />
      </Block>
    </PageWrap>
  );
}
