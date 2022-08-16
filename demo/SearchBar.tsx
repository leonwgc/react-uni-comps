import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { SearchBar, Toast } from 'react-uni-comps';

export default function App() {
  const [val, setVal] = useState('');

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <SearchBar
          placeholder="请输入搜索内容"
          clearable
          value={val}
          onChange={setVal}
          onCancel={() => {
            Toast.show('取消了');
          }}
          onSearch={(v) => Toast.show(v)}
        />
      </DemoBlock>

      <DemoBlock title="无取消">
        <SearchBar placeholder="请输入搜索内容" cancelText="" onSearch={(v) => Toast.show(v)} />
      </DemoBlock>
    </PageWrap>
  );
}
