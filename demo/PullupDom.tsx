import React, { useState, useRef, useEffect } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Pullup, PullToRefresh, Cell, Toast } from 'react-uni-comps';

// 第一次加载数据应该撑满容器,否则会一直拉数据直到撑满
const pageSize = 25;

const PullupDom = () => {
  const [list, setList] = useState([]);
  const [finished, setFinished] = useState(false);
  const ref = useRef(0);

  const fetchData = () => {
    return new Promise((resolve) => {
      var ar = [];
      for (var i = 0; i < pageSize; i++) {
        ar.push(ref.current * pageSize + i + 1);
      }
      setTimeout(() => {
        setList((d) => d.concat(ar));
        ref.current++;

        console.log(ref.current);

        if (ref.current > 3) {
          setFinished(true);
        }
        resolve(0);
      }, 900);
    });
  };

  const onRefresh = () => {
    return new Promise((resolve) => {
      ref.current = 0;
      var ar = [];
      const randomChar = Math.random().toString()[6];
      for (var i = 0; i < pageSize; i++) {
        ar.push(i + 1 + '-' + randomChar);
      }
      setTimeout(() => {
        setList(ar);

        console.log(ref.current);

        resolve(0);
      }, 1000);
    });
  };

  return (
    <PageWrap style={{ height: '100vh' }}>
      <DemoBlock title="搭配pullup">
        <PullToRefresh onRefresh={onRefresh} style={{ marginTop: 100 }}>
          <Pullup
            dataList={list}
            fetchData={fetchData}
            useWindowScroll={false}
            height="50vh"
            style={{ background: '#fff' }}
            finished={finished}
            dataRender={(data) => <Cell>{data}</Cell>}
          ></Pullup>
        </PullToRefresh>
      </DemoBlock>
    </PageWrap>
  );
};

export default PullupDom;