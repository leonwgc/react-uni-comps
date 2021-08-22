import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Spinner, Slide, Switch, Space, Divider, Button } from '../src';
import clsx from 'clsx';
import './Slide.less';

export default function App() {
  const [autoplay, setAutoplay] = useState(true);
  const [loop, setLoop] = useState(true);
  const [dot, setDot] = useState(true);
  const ref = useRef();
  const ar = ['#004bcc', 'pink', '#00bc8d', '#666'];

  return (
    <div className="app">
      <Divider>controls no.1</Divider>
      <Space>
        <Switch checked={autoplay} onChange={setAutoplay} />
        autoplay
        <Switch checked={loop} onChange={setLoop} />
        loop
        <Switch checked={dot} onChange={setDot} />
        showDot
      </Space>
      <Divider>ex.1</Divider>
      <Slide loop={loop} autoplay={autoplay} showDot={dot} ref={ref} onPageChange={console.log}>
        {ar.map((item, idx) => (
          <div
            key={idx}
            className={clsx('slide-page')}
            style={{ background: item }}
            onClick={() => alert('page' + item)}
          >
            page {item}
          </div>
        ))}
      </Slide>
      <Space style={{ marginTop: 20 }}>
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
      </Slide>
    </div>
  );
}
