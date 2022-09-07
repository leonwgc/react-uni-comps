import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Masonry, styled, RadioGroup, Cell } from 'react-uni-comps';

const images = [
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/163233/23/6151/392634/6017cb87Ea260c957/f4af02a7871a07db.jpg!q70.dpg.webp',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/62282/15/18428/144201/629f6a8cEff56b04d/a6a9d965064e55a6.jpg!q70.dpg.webp',
  'https://t7.baidu.com/it/u=993577982,1027868784&fm=193&f=GIF',
  'http://img13.360buyimg.com/n1/jfs/t1/176178/33/8390/436291/60965e8dEdb7eb9ee/60b61d78fc45764f.jpg',
  'http://img13.360buyimg.com/n1/jfs/t1/110887/30/27023/80925/626b818dE7189b302/2e06e0ebf03d6279.jpg',
  'http://img13.360buyimg.com/n1/jfs/t1/105748/37/30802/64889/62fbb062Ec4a7af91/42d3470379514a69.jpg',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/20944/31/19490/65311/63180a5bE63cbed8e/aef98d23f4974dc8.jpg!q70.dpg.webp',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/129562/10/25005/89320/631598a7E259d8c0a/48e6714c033dd3fd.jpg!q70.dpg.webp',
  'http://img13.360buyimg.com/n1/jfs/t1/103119/11/24876/89885/62299370Ea8a75408/e17ea43fab7efa4f.jpg',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/31049/22/17148/506614/62f36b3eE3856ac18/8ace44dabea9df7a.jpg!q70.dpg.webp',
];

const StyledMasonry = styled(Masonry)`
  font-size: 0;
  img {
    max-width: 100%;
    object-fit: scale-down;
  }
`;

const options = [2, 3];

export default function App() {
  const [columnCount, setColumnCount] = useState(2);

  return (
    <PageWrap>
      <DemoBlock title="瀑布流布局" padding={0}>
        <Cell
          label="列数"
          content={
            <RadioGroup
              options={options}
              value={columnCount}
              onChange={(v) => setColumnCount(v as number)}
            />
          }
        />
        <StyledMasonry columnCount={columnCount} columnGap={8} rowGap={8}>
          {images.map((i, key) => (
            <img src={i} key={key} />
          ))}
        </StyledMasonry>
      </DemoBlock>
    </PageWrap>
  );
}
