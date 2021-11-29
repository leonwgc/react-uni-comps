import React, { useState, useRef } from 'react';
import { Slide, Switch, Divider, Button, Cell, Toast } from '../src';

export default function App() {
  const [autoPlay, setAutoPlay] = useState(false);
  const [loop, setLoop] = useState(true);
  const [dot, setDot] = useState(true);
  const [isH, setisH] = useState(true);
  const ref = useRef();
  const ar = ['#004bcc', 'pink', '#00bc8d', '#666'];

  return (
    <div className="app">
      <Divider>Slide</Divider>
      <Cell title="autoPlay" content={<Switch checked={autoPlay} onChange={setAutoPlay} />} />
      <Cell title="loop" content={<Switch checked={loop} onChange={setLoop} />} />
      <Cell title="showDot" content={<Switch checked={dot} onChange={setDot} />} />
      <Cell title="horizontal" content={<Switch checked={isH} onChange={setisH} />} />
      <Slide
        ref={ref}
        loop={loop}
        autoPlay={autoPlay}
        direction={isH ? 'horizontal' : 'vertical'}
        showDot={dot}
        ref={ref}
        height={200}
        onPageChange={(pageIndex) => console.log('pageindex:' + pageIndex)}
        interval={200}
      >
        {ar.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: item,
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: 40,
              justifyContent: 'center',
            }}
            onClick={() => Toast.show({ content: 'page' + (idx + 1) })}
          >
            {idx + 1}
          </div>
        ))}
      </Slide>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => ref.current.prev()}>prev</Button>
        <Button onClick={() => ref.current.next()}>next</Button>
      </div>
    </div>
  );
}
