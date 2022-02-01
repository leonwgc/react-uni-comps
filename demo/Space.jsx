import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Space, Button, Divider } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="水平间距">
        <Space>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="换行">
        <Space wrap>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button>按钮5</Button>
          <Button>按钮6</Button>
          <Button>按钮7</Button>
          <Button>按钮8</Button>
          <Button>按钮9</Button>
          <Button>按钮10</Button>
          <Button>按钮11</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="垂直间距">
        <Space direction="vertical">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义间距大小">
        <Space size={24}>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="设置拆分">
        <Space split={<Divider type="vertical" />}>
          Text
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
