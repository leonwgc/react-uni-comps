import React, { useState, useRef, useEffect } from 'react';
import { Spinner, Slide, Switch, Space, Divider, Button } from '../src';
import clsx from 'clsx';
import './Slide.less';

export default function App() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [loop, setLoop] = useState(false);
  const [dot, setDot] = useState(true);
  const ref = useRef();
  const ar = ['#004bcc', 'pink', '#00bc8d', '#666'];

  return (
    <div className="app">
      <Divider>controls no.1</Divider>
      <Space wrap>
        <Switch checked={autoPlay} onChange={setAutoPlay} />
        autoPlay
        <Switch checked={loop} onChange={setLoop} />
        loop
        <Switch checked={dot} onChange={setDot} />
        showDot
      </Space>
      <Divider>ex.1</Divider>
      <Slide
        style={{ margin: '10px 12px' }}
        loop={loop}
        autoPlay={autoPlay}
        showDot={dot}
        ref={ref}
        onPageChange={console.log}
        interval={2000}
      >
        {ar.map((item, idx) => (
          <div
            key={idx}
            className={clsx('slide-page')}
            style={{ background: item }}
            onClick={() => alert('page' + (idx + 1))}
          >
            page {idx + 1}
          </div>
        ))}
      </Slide>
      {/* <Space style={{ marginTop: 20 }}>
        <Button type="primary" onClick={() => ref.current.prev()}>
          Prev
        </Button>
        <Button onClick={() => ref.current.goToPage(0)}>First</Button>
        <Button onClick={() => ref.current.goToPage(ar.length - 1)}>Last</Button>
        <Button type="primary" onClick={() => ref.current.next()}>
          Next
        </Button>
        <Button onClick={() => console.log(ref.current.bs)}>instance</Button>
      </Space>
      <Divider>ex.2</Divider>
      <Slide direction="vertical" defaultPageIndex={2} style={{ marginTop: 30, height: 200 }}>
        {ar.map((item, idx) => (
          <div key={idx} className={clsx('slide-page', 'v')} style={{ background: item }}>
            page {item}
          </div>
        ))}
      </Slide> */}
    </div>
  );
}
