import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { SortableList, Button } from 'react-uni-comps';

const list = [
  { title: '1' },
  {
    title: '2',
  },
  { title: '3' },
  { title: '4' },
  { title: '5' },
  { title: '6' },
];

export default function App() {
  return (
    <PageWrap>
      <Block title="默认" padding={0}>
        <SortableList
          style={{ display: 'flex', flexWrap: 'wrap' }}
          dataList={list}
          dataRender={(data) => <Button style={{ width: 120, height: 60 }}>{data.title}</Button>}
          onSort={(list) => {
            console.log(list.map((item) => item.title));
          }}
        ></SortableList>
      </Block>
    </PageWrap>
  );
}
