import React, { useState, useRef } from 'react';
import { Button, Pullup, ScrollTop } from 'react-uni-comps';

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
        // dom滚动需要设置高度
        // style={{ height: '80vh' }}
        dataList={list}
        // finishedText="没有更多数据了!"
        fetchData={fetchData}
        finished={finished}
        dataRender={(data, index) => {
          return (
            <div style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
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
