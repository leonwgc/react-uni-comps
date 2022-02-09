import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Ripple, Button, Toast, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="点击波纹效果">
        <Ripple
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
      <DemoBlock title="按钮">
        <Space>
          <Ripple>
            <Button>点击波纹效果</Button>
          </Ripple>
          <Ripple>
            <Button type="primary">点击波纹效果</Button>
          </Ripple>
        </Space>
      </DemoBlock>
      <DemoBlock title="带点击事件按钮">
        <Space>
          <Ripple>
            <Button onClick={() => Toast.show('hi from button')}>点击波纹效果</Button>
          </Ripple>
          <Ripple onClick={() => Toast.show('hi from Ripple')}>
            <Button type="primary">点击波纹效果1</Button>
          </Ripple>
        </Space>
      </DemoBlock>
      <DemoBlock title="波纹颜色">
        <Ripple
          color="red"
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
      <DemoBlock title="波纹起始缩放大小和动画时间">
        <Ripple
          startScale={0}
          duration={180}
          color="#005cff"
          style={{
            height: 100,
            width: '100%',
            border: '1px solid #eee',
          }}
        ></Ripple>
      </DemoBlock>
    </PageWrap>
  );
}
