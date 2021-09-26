import React, { useState, useRef, useEffect } from 'react';
import { Spinner, Slide, Switch, Space, Divider, Button, Cell } from '../src';
import clsx from 'clsx';

export default function App() {
  const [autoPlay, setAutoPlay] = useState(false);
  const [loop, setLoop] = useState(true);
  const [dot, setDot] = useState(true);
  const [isH, setisH] = useState(true);
  const ref = useRef();
  const ar = ['#004bcc', 'pink', '#00bc8d', '#666'];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="app">
      <Divider>Slide</Divider>
      <Cell title="autoPlay" content={<Switch checked={autoPlay} onChange={setAutoPlay} />} />
      <Cell title="loop" content={<Switch checked={loop} onChange={setLoop} />} />
      <Cell title="showDot" content={<Switch checked={dot} onChange={setDot} />} />
      <Cell title="horizontal" content={<Switch checked={isH} onChange={setisH} />} />
      <Slide
        ref={ref}
        style={{ margin: '10px 12px' }}
        loop={loop}
        autoPlay={autoPlay}
        direction={isH ? 'horizontal' : 'vertical'}
        showDot={dot}
        ref={ref}
        height={200}
        onPageChange={console.log}
        interval={3000}
      >
        {ar.map((item, idx) => (
          <div
            key={idx}
            className={clsx('slide-page')}
            style={{
              background: item,
              display: 'flex',
              alignItems: 'center',
              color: '#fff',
              fontSize: 40,
              justifyContent: 'center',
            }}
          >
            page {idx + 1}
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
