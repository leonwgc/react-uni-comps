import React, { useState, useRef } from 'react';
import { Spin } from 'antd';
import { Pullup, Popup, WaitLoading, Space, Button } from 'react-uni-comps';
import './Pullup.less';

// 第一次加载数据应该撑满容器， 否则无效
const pageSize = 10;

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hasMoreData, sethasMoreData] = useState(true);
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

        if (ref.current > 6) {
          sethasMoreData(false);
        }
        setLoading(false);
        resolve();
      }, 1900);
    });
  };

  return (
    <>
      <Space>
        <WaitLoading visible={loading}>
          <Spin />
        </WaitLoading>
        <Pullup
          className="pull-wrapper"
          dataList={list}
          fetchData={fetchData}
          hasMoreData={hasMoreData}
          spinner={<Spin />}
          dataRender={(data) => {
            return <div className="item">list {data}</div>;
          }}
        ></Pullup>
        <Button type="primary" onClick={() => setVisible(true)}>
          show pullup left panel
        </Button>
        <Pullup
          style={{ height: '100vh', marginLeft: 100 }}
          className="pull-wrapper"
          dataList={list}
          endText="没有更多数据了!"
          fetchData={fetchData}
          hasMoreData={hasMoreData}
          spinner={<Spin />}
          footerStyle={{ height: 100 }}
          dataRender={(data, index) => {
            return <div className="item">list {index + 1}</div>;
          }}
        ></Pullup>
      </Space>
      <Popup
        position="right"
        className="right-panel"
        visible={visible}
        onMaskClick={() => setVisible(false)}
      >
        <Pullup
          className="pull-wrapper"
          style={{ width: '100%', height: 'calc(100vh - 60px)', border: 'none' }}
          dataList={list}
          fetchData={fetchData}
          hasMoreData={hasMoreData}
          spinner={<Spin />}
          dataRender={(data) => {
            return <div className="item">list {data}</div>;
          }}
        ></Pullup>
      </Popup>
      <WaitLoading visible={loading}>
        <div className="wait-loading">
          <Spin></Spin>
        </div>
      </WaitLoading>
    </>
  );
};

export default App;
