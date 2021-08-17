import React, { useState, useRef } from 'react';
import { Pullup, Space } from 'react-uni-comps';
import './Pullup.less';

// 第一次加载数据应该撑满容器,否则会一直拉数据知道撑满
const pageSize = 20;

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
          style={{ height: '100vh', width: '100vw', border: 'none', margin: '16px 8px' }}
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
      </Space>
    </>
  );
};

export default App;
