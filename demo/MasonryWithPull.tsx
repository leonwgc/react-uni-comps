import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import { Pullup, PullToRefresh, Masonry, styled } from 'react-uni-comps';

const pageSize = 30;

const StyledItem = styled.div`
  background-color: #fff;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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
      }, 1000);
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
      <PullToRefresh onRefresh={onRefresh}>
        <Pullup fetchData={fetchData} finished={finished}>
          <Masonry>
            {list.map((item) => (
              <StyledItem>{item}</StyledItem>
            ))}
          </Masonry>
        </Pullup>
      </PullToRefresh>
    </PageWrap>
  );
};

export default App;
