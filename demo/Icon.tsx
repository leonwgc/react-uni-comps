import React from 'react';
import { Icon, Space } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';

// 加载 iconfont
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Icon type="uc-icon-horn" />
      </DemoBlock>

      <DemoBlock title="大小和颜色">
        <Space>
          <Icon type="uc-icon-horn" style={{ fontSize: 20, color: 'red' }} />

          <Icon type="uc-icon-horn" style={{ fontSize: 30, color: 'green' }} />

          <Icon type="uc-icon-horn" style={{ fontSize: 40, color: 'blue' }} />
        </Space>
      </DemoBlock>

      <DemoBlock title="不同type">
        <Space style={{ fontSize: 24, color: '#005cff' }}>
          <Icon type="uc-icon-horn" />
          <Icon type="uc-icon-tupian" />
          <Icon type="uc-icon-dianhua" />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
