import React, { useState, useRef, useEffect } from 'react';
import { Button, Pullup, ScrollTop, throttle } from '../src';

// 第一次加载数据应该撑满容器,否则会一直拉数据直到撑满
const pageSize = 30;

const App = () => {
  const [list, setList] = useState([]);
  const [finished, setFinished] = useState(false);
  const [y, setY] = useState(0);
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
  useEffect(() => {
    const onScroll = throttle(() => {
      console.log(window.pageYOffset);
      setY(window.pageYOffset);
    });
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Pullup
        // dom滚动需要设置高度
        // style={{ height: '80vh' }}
        dataList={list}
        finishedText="没有更多数据了!"
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
      {y > 50 ? (
        <ScrollTop>
          <Button
            type="primary"
            style={{
              borderRadius: '100%',
              width: 40,
              height: 40,
              position: 'fixed',
              bottom: 20,
              right: 20,
            }}
          >
            top
          </Button>
        </ScrollTop>
      ) : null}
    </>
  );
};

export default App;
