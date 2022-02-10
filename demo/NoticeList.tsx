import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { NoticeList, Space, styled, Icon } from 'react-uni-comps';
import type { Notice } from 'react-uni-comps/es/NoticeList';

const StyledNoticeList = styled(NoticeList)`
  background-color: rgb(251, 248, 220);
  color: red;
  font-size: 16px;
  padding: 0 8px;
`;

const list: Notice[] = [
  { text: '消息通知1' },
  { text: '消息通知2' },
  { text: '消息通知3' },
  { text: '消息通知4' },
  { text: '消息通知5' },
];

export default function App() {
  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="默认">
        <NoticeList list={list} />
      </DemoBlock>

      <DemoBlock title="可关闭">
        <NoticeList closeable list={list} />
      </DemoBlock>

      <DemoBlock title="带icon">
        <NoticeList icon={<Icon type="uc-icon-horn" />} list={list} />
      </DemoBlock>

      <DemoBlock title="extra配置">
        <NoticeList
          extra={
            <Space style={{ color: '#111' }}>
              <Icon type="uc-icon-horn" /> 手慢无
            </Space>
          }
          list={list}
        />
      </DemoBlock>

      <DemoBlock title="自定义">
        <StyledNoticeList list={list} stayTime={1000} />
      </DemoBlock>
    </PageWrap>
  );
}
