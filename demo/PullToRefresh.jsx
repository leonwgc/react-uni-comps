import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button, Pullup, ScrollTop, Cell, PullToRefresh, Toast } from 'react-uni-comps';

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
        resolve();
      }, 500);
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

        resolve();
      }, 1000);
    });
  }, []);

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="下拉执行onRefresh">
        <PullToRefresh onRefresh={() => Toast.show('刷新.....')}>
          <div
            style={{
              height: '30vh',
              width: '100%',
              border: '1px solid #ccc',
              writingMode: 'vertical-lr',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 20,
            }}
          >
            下拉触发刷新
          </div>
        </PullToRefresh>
      </DemoBlock>

      <DemoBlock title="搭配Pullup">
        <PullToRefresh onRefresh={onRefresh}>
          <Pullup
            useWindowScroll
            dataList={list}
            fetchData={fetchData}
            finished={finished}
            dataRender={(data) => <Cell title={`item${data}`} />}
          />
        </PullToRefresh>
      </DemoBlock>

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

export default App;
