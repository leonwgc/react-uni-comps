import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Pullup, BackTop, Cell, PullToRefresh } from 'react-uni-comps';

const pageSize = 30;

const App = () => {
  const [list, setList] = useState([]);
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

        console.log(ref.current);

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
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="下滑100px显示">
        <PullToRefresh onRefresh={onRefresh}>
          <Pullup
            dataList={list}
            fetchData={fetchData}
            finished={finished}
            dataRender={(data) => <Cell title={`item${data}`} />}
          />
        </PullToRefresh>
      </DemoBlock>

      <BackTop>
        <Button
          circle
          style={{
            width: 60,
            height: 60,
            position: 'fixed',
            bottom: 60,
            right: 20,
            fontSize: 20,
            color: '#8c8c8c',
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          Top
        </Button>
      </BackTop>
    </PageWrap>
  );
};

export default App;
