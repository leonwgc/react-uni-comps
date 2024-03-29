import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { SortableList, Button, Space, AutoCenter } from 'react-uni-comps';

const list = Array.from(new Array(9), (v, i) => ({
  title: i + 1,
}));

export default function App() {
  const [dataList, setDataList] = useState<any>(list);

  return (
    <PageWrap>
      <Block title="拖动排序" border="0">
        <AutoCenter style={{ marginBottom: 24 }}>
          <Space>
            当前排列
            {dataList.map((item, index) => (
              <span key={index}>{item.title}</span>
            ))}
          </Space>
        </AutoCenter>

        <SortableList
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
          dataList={dataList}
          dataRender={(data) => (
            <Button style={{ width: 60, height: 60, fontSize: 18, borderRadius: '50%' }}>
              {data.title}
            </Button>
          )}
          onSort={setDataList}
        ></SortableList>
      </Block>
    </PageWrap>
  );
}
