import React from 'react';
import { Icon, Space } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Icon type="uc-icon-gouwuche" />
      </DemoBlock>

      <DemoBlock title="大小和颜色">
        <Space>
          <Icon type="uc-icon-gouwuche" style={{ fontSize: 20, color: 'red' }} />

          <Icon type="uc-icon-gouwuche" style={{ fontSize: 30, color: 'green' }} />

          <Icon type="uc-icon-gouwuche" style={{ fontSize: 40, color: 'blue' }} />
        </Space>
      </DemoBlock>

      <DemoBlock title="不同type">
        <Space style={{ fontSize: 24 }}>
          <Icon type="uc-icon-gouwuche" />
          <Icon type="uc-icon-tupian" />
          <Icon type="uc-icon-dianhua" />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
