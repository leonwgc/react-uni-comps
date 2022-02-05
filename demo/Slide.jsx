import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { Slide, Switch, Button, Cell } from 'react-uni-comps';

export default function App() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [loop, setLoop] = useState(true);
  const [dot, setDot] = useState(true);
  const [isH, setisH] = useState(true);
  const ref = useRef();
  const images = [
    'https://t7.baidu.com/it/u=1811223786,2017754440&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2466425392,342874463&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2488490742,1686455852&fm=193&f=GIF',
  ];

  return (
    <PageWrap style={{ padding: 0 }}>
      <Cell label="自动轮播" content={<Switch checked={autoPlay} onChange={setAutoPlay} />} />
      <Cell label="循环" content={<Switch checked={loop} onChange={setLoop} />} />
      <Cell label="显示分页指示器" content={<Switch checked={dot} onChange={setDot} />} />
      <Cell label="水平轮播" content={<Switch checked={isH} onChange={setisH} />} />
      <Slide
        ref={ref}
        loop={loop}
        autoPlay={autoPlay}
        direction={isH ? 'horizontal' : 'vertical'}
        showPageIndicator={dot}
        onPageChange={(pageIndex) => console.log('pageindex:' + pageIndex)}
        interval={2000}
      >
        {images.map((item) => (
          <img src={item} key={item} />
        ))}
      </Slide>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <Button onClick={() => ref.current.prev()}>上一页</Button>
        <Button onClick={() => ref.current.next()}>下一页</Button>
      </div>

      <Slide style={{ marginTop: 30 }} interval={1000} autoPlay direction="vertical">
        {images.map((item) => (
          <img src={item} key={item} />
        ))}
      </Slide>
    </PageWrap>
  );
}
