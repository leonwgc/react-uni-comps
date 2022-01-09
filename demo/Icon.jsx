import React from 'react';
import { Icon, styled, Divider, Space } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';

// 加载在 iconfont.cn 的图标
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');

const StyledIcon = styled(Icon)`
  font-size: 36px;
  color: red;
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认" style={{ fontSize: 32 }}>
        <Space>
          <Icon type="uc-icon-yonghu" />
          <Icon type="uc-icon-gouwuche" />
        </Space>
      </DemoBlock>

      <DemoBlock title="大小和颜色">
        <Space wrap>
          <Icon type="uc-icon-yonghu" style={{ fontSize: 60, color: 'blue' }} />

          <StyledIcon type="uc-icon-yonghu" />

          <StyledIcon type="uc-icon-yonghu" style={{ background: '#00bc8d', fontSize: 48 }} />

          <Icon type="uc-icon-gouwuche" style={{ fontSize: 100, color: '#999' }} />

          <Icon type="uc-icon-gouwuche" style={{ fontSize: 80, color: 'green' }} />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
