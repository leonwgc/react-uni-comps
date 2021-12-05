import React from 'react';
import { Icon, styled, Space } from 'react-uni-comps';

// 加载在 iconfont.cn 上自行管理的图标
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');

const StyledIcon = styled(Icon)`
  font-size: 36px;
  color: red;
`;

export default function App() {
  return (
    <Space wrap size={16}>
      <Icon type="uc-icon-yonghu" />
      <Icon type="uc-icon-yonghu" style={{ fontSize: 60, color: 'blue' }} />
      <StyledIcon type="uc-icon-yonghu" />
      <StyledIcon type="uc-icon-yonghu" style={{ background: '#00bc8d', fontSize: 48 }} />
      <Icon type="uc-icon-gouwuche" style={{ fontSize: 100, color: '#999' }} />
      <Icon type="uc-icon-gouwuche" style={{ fontSize: 80, color: 'green' }} />
    </Space>
  );
}
