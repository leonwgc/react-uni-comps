import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { SearchBar } from 'react-uni-comps';

export default function App() {
  const [val, setVal] = useState('');
  return (
    <PageWrap>
      <DemoBlock title="默认底部">
        <SearchBar placeholder="请输入搜索内容" clearable value={val} onChange={setVal} />
      </DemoBlock>
    </PageWrap>
  );
}
