import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { LazyLoadImage, Space } from 'react-uni-comps';

const LazyloadImage = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <PageWrap>
      <DemoBlock title="图片懒加载">
        <Space direction="vertical">
          {arr.map((item, k) => (
            <LazyLoadImage
              key={k}
              src={
                k % 2 == 0
                  ? 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF'
                  : 'https://t7.baidu.com/it/u=2582370511,530426427&fm=193&f=GIF'
              }
              width={300}
              height={200}
            ></LazyLoadImage>
          ))}
        </Space>
      </DemoBlock>
    </PageWrap>
  );
};

export default LazyloadImage;
