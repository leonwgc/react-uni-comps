import React from 'react';
import { LazyLoadElement, Space } from '../src';

const LazyloadImage = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <Space direction="vertical" size={16}>
      {arr.map((item, k) => (
        <LazyLoadElement key={k} width={400} height={200}>
          <img
            width={400}
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
  );
};

export default LazyloadImage;
