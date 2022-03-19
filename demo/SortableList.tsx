import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { SortableList, Button, Space } from 'react-uni-comps';

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
  const [dataList, setDataList] = useState<any>(list);

  return (
    <PageWrap>
      <Block title="拖动方块排序">
        <Space>
          当前排列
          {dataList.map((item) => (
            <span>{item.title}</span>
          ))}
        </Space>

        <SortableList
          style={{ display: 'flex', flexWrap: 'wrap' }}
          dataList={dataList}
          dataRender={(data) => (
            <Button type="primary" style={{ width: 120, height: 60, margin: 10, fontSize: 32 }}>
              {data.title}
            </Button>
          )}
          onSort={(list) => {
            setDataList([...list]);
          }}
        ></SortableList>
      </Block>
    </PageWrap>
  );
}
