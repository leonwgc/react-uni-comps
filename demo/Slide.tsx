import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Slide } from 'react-uni-comps';

export default function App() {
  const images = [
    'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=1854303985,2925188750&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF',
  ];

  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="水平">
        <Slide autoPlay direction="horizontal">
          {images.map((item) => (
            <img src={item} key={item} />
          ))}
        </Slide>
      </DemoBlock>

      <DemoBlock title="垂直">
        <Slide interval={1000} autoPlay direction="vertical">
          {images.map((item) => (
            <img src={item} key={item} />
          ))}
        </Slide>
      </DemoBlock>
    </PageWrap>
  );
}
