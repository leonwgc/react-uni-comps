import React, { useState } from 'react';
import styled from 'styled-components';
import { Spinner, Slide, Switch, Space, Divider } from '../src';
import clsx from 'clsx';
import './Slide.less';

export default function App() {
  const [autoplay, setAutoplay] = useState(true);
  const [loop, setLoop] = useState(true);

  const ar = ['#004bcc', 'pink', '#00bc8d', '#666'];

  return (
    <div className="app">
      <Divider>controls no.1</Divider>
      <Space>
        <Switch checked={autoplay} onChange={setAutoplay} />
        autoplay
        <Switch checked={loop} onChange={setLoop} />
        loop
      </Space>
      <Divider>ex.1</Divider>
      <Slide
        loop={loop}
        autoplay={autoplay}
        onPageChange={console.log}
        dotRender={(pageIndex) => (
          <div className="dots-wrapper">
            {[1, 2, 3, 4].map((item, idx) => (
              <span key={idx} className={clsx('dot', { active: pageIndex === idx })}></span>
            ))}
          </div>
        )}
      >
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
      <Divider>ex.2</Divider>
      <Slide
        direction="vertical"
        defaultPageIndex={2}
        dotRender={(pageIndex) => (
          <div className={clsx('dots-wrapper', 'v')}>
            {[1, 2, 3, 4].map((item, idx) => (
              <span key={idx} className={clsx('dot', { active: pageIndex === idx })}></span>
            ))}
          </div>
        )}
        style={{ marginTop: 30, height: 200 }}
      >
        {ar.map((item, idx) => (
          <div key={idx} className={clsx('slide-page', 'v')} style={{ background: item }}>
            page {item}
          </div>
        ))}
      </Slide>
    </div>
  );
}
