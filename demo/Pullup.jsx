import React, { useState, useRef } from 'react';
import { Button, Pullup, ScrollTop, Spinner } from 'react-uni-comps';

// 第一次加载数据应该撑满容器,否则会一直拉数据直到撑满
const pageSize = 30;

const App = () => {
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

        if (ref.current > 5) {
          setFinished(true);
        }
        resolve();
      }, 900);
    });
  };

  return (
    <>
      <Pullup
        useWindowScroll
        dataList={list}
        fetchData={fetchData}
        finished={finished}
        footer={(loading, finished) => {
          return loading ? (
            <div style={{ color: 'red', padding: '16px 12px', textAlign: 'center' }}>
              <Spinner style={{ marginRight: 8, fontSize: 24 }} />
              加载中...
            </div>
          ) : finished ? (
            <div style={{ color: 'red', padding: '16px 12px', textAlign: 'center' }}>
              没有数据了...
            </div>
          ) : null;
        }}
        dataRender={(data, index) => {
          return (
            <div style={{ padding: '10px 16px', borderBottom: '1px solid #e0e0e0' }}>
              list {index + 1}
            </div>
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
    </>
  );
};

export default App;
