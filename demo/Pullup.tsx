import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Pullup, PullToRefresh, styled, Masonry } from 'react-uni-comps';

const images = [
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3946740267,701192077&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=165171033,838989231&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1854303985,2925188750&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1854303985,2925188750&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
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
      <DemoBlock title="dom滚动 (默认是监听window滚动)">
        <Pullup useWindowScroll={false} height={120} fetchData={fetchData} finished={finished}>
          {list.map((item, idx) => (
            <StyledItem key={idx}>{item}</StyledItem>
          ))}
        </Pullup>
      </DemoBlock>

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
        <Pullup useWindowScroll={false} height={240} fetchData={fetchData} finished={finished}>
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
