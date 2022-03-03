import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { styled, SideBar, Icon, Space, SortableList } from 'react-uni-comps';

const list = [
  { title: '选项一' },
  {
    title: '选项二',
  },
  { title: '选项三' },
  { title: '选项4' },
  { title: '选项5' },
  { title: '选项6' },
];

export default function App() {
  return (
    <PageWrap>
      <Block title="默认" padding={0}>
        <SortableList
          dataList={list}
          dataRender={(data) => (
            <div style={{ height: 50, borderBottom: '1px solid #ccc' }}>{data.title}</div>
          )}
          onSort={(list) => {
            console.log(list.map((item) => item.title));
          }}
        ></SortableList>
      </Block>
    </PageWrap>
  );
}
