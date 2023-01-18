import React from 'react';
import { Icon, Space } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';

// 加载iconfont图标 https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3867090
Icon.loadFromIconfontCN('//at.alicdn.com/t/c/font_3867090_48snq6jkke6.js');

export default function App() {
  return (
    <PageWrap>
      <DemoBlock>
        <Space style={{ fontSize: 30 }}>
          <Icon type="icon-erweima" />
          <Icon type="icon-quanzi" style={{ color: 'red' }} />
          <Icon type="icon-dizhi" style={{ color: 'green' }} />
          <Icon type="icon-yinle" style={{ fontSize: 60 }} />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
