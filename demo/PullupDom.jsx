import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { Button, Pullup, ScrollTop, HairLineBox } from 'react-uni-comps';

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
        resolve();
      }, 900);
    });
  };

  const refresh = () => {
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

        resolve();
      }, 1000);
    });
  };

  return (
    <PageWrap style={{ background: '#eee', height: '100vh' }}>
      <Pullup
        style={{ height: '50vh', marginTop: 30, background: '#fff' }}
        dataList={list}
        fetchData={fetchData}
        // refresh={refresh}
        finished={finished}
        dataRender={(data) => {
          return (
            <HairLineBox style={{ padding: '10px 16px' }} position="top">
              {data}
            </HairLineBox>
          );
        }}
      ></Pullup>
      <ScrollTop visibilityHeight={100}>
        <Button
          type="primary"
          circle
          style={{
            width: 40,
            height: 40,
            position: 'fixed',
            bottom: 60,
            right: 20,
          }}
        >
          top
        </Button>
      </ScrollTop>
    </PageWrap>
  );
};

export default PullupDom;
