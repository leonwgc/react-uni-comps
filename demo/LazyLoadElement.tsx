import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { LazyLoadElement } from 'react-uni-comps';

const App = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <PageWrap>
      <DemoBlock title="组件懒加载" padding={0}>
        {arr.map((item, k) => (
          <LazyLoadElement key={k} width={'100%'} height={200}>
            <img
              src={
                k % 2 == 0
                  ? 'https://t7.baidu.com/it/u=1605309380,911023805&fm=193&f=GIF'
                  : 'https://t7.baidu.com/it/u=2808499218,4024510450&fm=193&f=GIF'
              }
            ></img>
          </LazyLoadElement>
        ))}
      </DemoBlock>
    </PageWrap>
  );
};

export default App;
