import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import { Button, Pullup, ScrollTop, Cell, Spin, Space, PullToRefresh } from 'react-uni-comps';

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

  return (
    <PageWrap style={{ padding: 0, userSelect: 'none' }}>
      <PullToRefresh
        onRefresh={() => {
          return new Promise((r) => {
            setTimeout(() => {
              r(100);
              console.log('fetched');
            }, 2000);
          });
        }}
      >
        <Pullup
          useWindowScroll
          dataList={list}
          fetchData={fetchData}
          finished={finished}
          dataRender={(data) => <Cell title={`item${data}`} />}
        />
      </PullToRefresh>
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
