import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { LazyLoadElement, Space } from 'react-uni-comps';

const App = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <PageWrap>
      <DemoBlock title="组件懒加载" textAlign="center">
        <Space direction="vertical">
          {arr.map((item, k) => (
            <LazyLoadElement key={k} width={300} height={200}>
              <img
                width={300}
                height={200}
                src={
                  k % 2 == 0
                    ? 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF'
                    : 'https://t7.baidu.com/it/u=2582370511,530426427&fm=193&f=GIF'
                }
              ></img>
            </LazyLoadElement>
          ))}
        </Space>
      </DemoBlock>
    </PageWrap>
  );
};

export default App;
