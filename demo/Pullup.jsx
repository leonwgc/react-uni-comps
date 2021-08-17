import React, { useState, useRef } from 'react';
import { Spin } from 'antd';
import { Pullup, WaitLoading, Space } from 'react-uni-comps';
import './Pullup.less';

// 第一次加载数据应该撑满容器,否则会一直拉数据知道撑满
const pageSize = 10;

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const ref = useRef(0);

  const fetchData = () => {
    setLoading(true);
    return new Promise((resolve) => {
      var ar = [];
      for (var i = 0; i < pageSize; i++) {
        ar.push(ref.current * pageSize + i + 1);
      }
      setTimeout(() => {
        setList((d) => d.concat(ar));
        ref.current++;

        console.log(ref.current);

        if (ref.current > 6) {
          setFinished(true);
        }
        setLoading(false);
        resolve();
      }, 900);
    });
  };

  return (
    <>
      <Space>
        {/* <Pullup
          className="pull-wrapper"
          dataList={list}
          fetchData={fetchData}
          finished={finished}
          dataRender={(data) => {
            return <div className="item">list {data}</div>;
          }}
        ></Pullup> */}

        <Pullup
          style={{ height: '100vh', width: '100vw' }}
          className="pull-wrapper"
          dataList={list}
          finishedText="没有更多数据了!"
          fetchData={fetchData}
          finished={finished}
          dataRender={(data, index) => {
            return <div className="item">list {index + 1}</div>;
          }}
        ></Pullup>
      </Space>

      <WaitLoading visible={loading}>
        <div className="wait-loading">
          <Spin></Spin>
        </div>
      </WaitLoading>
    </>
  );
};

export default App;
