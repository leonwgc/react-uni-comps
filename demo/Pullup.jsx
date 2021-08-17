import React, { useState, useRef } from 'react';
import { Spin } from 'antd';
import { Pullup, Popup, WaitLoading, Space, Button } from 'react-uni-comps';
import './Pullup.less';

// 第一次加载数据应该撑满容器， 否则无效
const pageSize = 6;

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
        <Pullup
          className="pull-wrapper"
          dataList={list}
          fetchData={fetchData}
          finished={finished}
          dataRender={(data) => {
            return <div className="item">list {data}</div>;
          }}
        ></Pullup>

        {/* <Pullup
          style={{ height: '100vh', marginLeft: 100 }}
          className="pull-wrapper"
          dataList={list}
          endText="没有更多数据了!"
          fetchData={fetchData}
          isEnd={isEnd}
          loadingText={<Spin />}
          footerStyle={{ height: 100 }}
          dataRender={(data, index) => {
            return <div className="item">list {index + 1}</div>;
          }}
        ></Pullup> */}
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
