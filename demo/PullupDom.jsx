import React, { useState, useRef } from 'react';
import { Button, Pullup, ScrollTop, Space, Spinner } from 'react-uni-comps';

// 第一次加载数据应该撑满容器,否则会一直拉数据直到撑满
const pageSize = 30;

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
        style={{ height: '80vh', marginTop: 10 }}
        dataList={list}
        finishedText="no more data :("
        loadingText={
          <Space>
            <Spinner /> loading
          </Space>
        }
        fetchData={fetchData}
        finished={finished}
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
          circle
          style={{
            position: 'fixed',
            bottom: 60,
            right: 20,
            width: 80,
            height: 80,
          }}
        >
          回到顶部
        </Button>
      </ScrollTop>
    </>
  );
};

export default PullupDom;
