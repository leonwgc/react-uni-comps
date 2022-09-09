import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Pullup, PullToRefresh, styled, Masonry } from 'react-uni-comps';

const images = [
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/163233/23/6151/392634/6017cb87Ea260c957/f4af02a7871a07db.jpg!q70.dpg.webp',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/31049/22/17148/506614/62f36b3eE3856ac18/8ace44dabea9df7a.jpg!q70.dpg.webp',
  'http://img13.360buyimg.com/n1/jfs/t1/176178/33/8390/436291/60965e8dEdb7eb9ee/60b61d78fc45764f.jpg',
  'http://img13.360buyimg.com/n1/jfs/t1/110887/30/27023/80925/626b818dE7189b302/2e06e0ebf03d6279.jpg',
  'http://img13.360buyimg.com/n1/jfs/t1/105748/37/30802/64889/62fbb062Ec4a7af91/42d3470379514a69.jpg',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/20944/31/19490/65311/63180a5bE63cbed8e/aef98d23f4974dc8.jpg!q70.dpg.webp',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/129562/10/25005/89320/631598a7E259d8c0a/48e6714c033dd3fd.jpg!q70.dpg.webp',
  'http://img13.360buyimg.com/n1/jfs/t1/103119/11/24876/89885/62299370Ea8a75408/e17ea43fab7efa4f.jpg',
  '//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/62282/15/18428/144201/629f6a8cEff56b04d/a6a9d965064e55a6.jpg!q70.dpg.webp',
];
const StyledItem = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const pageSize = 30;

const App = () => {
  const [list, setList] = useState<any>([]);
  const [finished, setFinished] = useState(false);
  const ref = useRef(0);

  const fetchData = useCallback(() => {
    return new Promise((resolve) => {
      var ar = [];
      for (var i = 0; i < pageSize; i++) {
        ar.push(ref.current * pageSize + i + 1);
      }
      setTimeout(() => {
        setList((d) => d.concat(ar));
        ref.current++;

        if (ref.current > 3) {
          setFinished(true);
        }
        resolve(0);
      }, 1000);
    });
  }, []);

  const onRefresh = useCallback(() => {
    return new Promise((resolve) => {
      ref.current = 0;
      setFinished(false);
      var ar = [];
      const randomChar = Math.random().toString().slice(2, 4);
      for (var i = 0; i < pageSize; i++) {
        ar.push(i + 1 + '-' + randomChar);
      }
      setTimeout(() => {
        setList(ar);

        resolve(0);
      }, 1000);
    });
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="下拉刷新">
        <PullToRefresh onRefresh={onRefresh}>
          <Pullup useWindowScroll={false} height={120} fetchData={fetchData} finished={finished}>
            {list.map((item, idx) => (
              <StyledItem key={idx}>{item}</StyledItem>
            ))}
          </Pullup>
        </PullToRefresh>
      </DemoBlock>

      <DemoBlock title="搭配瀑布流布局">
        <Pullup useWindowScroll={false} height={460} fetchData={fetchData} finished={finished}>
          <Masonry>
            {list.map((item, idx) => (
              <img src={images[idx % images.length]} key={idx} />
            ))}
          </Masonry>
        </Pullup>
      </DemoBlock>
    </PageWrap>
  );
};

export default App;
