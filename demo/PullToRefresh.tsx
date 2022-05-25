import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Pullup, Cell, PullToRefresh, styled, Spin, Space, Icon } from 'react-uni-comps';

const pageSize = 10;

const CompleteText = (
  <Space style={{ color: 'rgb(0, 188, 112)' }}>
    <Icon type="uc-icon-chenggong" /> 刷新成功
  </Space>
);

const StyledWrap = styled.div`
  height: 160px;
  width: 100%;
  writing-mode: vertical-lr;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

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
        resolve(0);
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

        resolve(0);
      }, 1000);
    });
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="下拉刷新" padding={0}>
        <PullToRefresh completeText={CompleteText}>
          <StyledWrap>下拉刷新</StyledWrap>
        </PullToRefresh>
      </DemoBlock>

      <DemoBlock title="搭配Pullup">
        <PullToRefresh onRefresh={onRefresh} completeText={CompleteText}>
          <Pullup
            dataList={list}
            useWindowScroll={false}
            fetchData={fetchData}
            height={200}
            finished={finished}
            dataRender={(data) => <Cell>{data}</Cell>}
          ></Pullup>
        </PullToRefresh>
      </DemoBlock>

      <DemoBlock title="自定义状态文本">
        <PullToRefresh
          onRefresh={onRefresh}
          pullingText={
            <Space>
              <Spin />
              下拉刷新
            </Space>
          }
          canReleaseText={
            <Space>
              <Spin />
              释放立即刷新
            </Space>
          }
          refreshingText={
            <Space>
              <Spin />
              加载中...
            </Space>
          }
          completeText={CompleteText}
          completeDelay={1000}
        >
          <StyledWrap>下拉刷新</StyledWrap>
        </PullToRefresh>
      </DemoBlock>
    </PageWrap>
  );
};

export default App;
