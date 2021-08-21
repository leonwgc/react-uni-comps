import React from 'react';
import styled from 'styled-components';
import { Spinner, Slide } from '../src';
import clsx from 'clsx';
import './Slide.less';

export default function App() {
  return (
    <div className="app">
      <Slide
        dotRender={(pageIndex) => (
          <div className="dots-wrapper">
            {[1, 2, 3, 4].map((item, idx) => (
              <span key={idx} className={clsx('dot', { active: pageIndex === idx })}></span>
            ))}
          </div>
        )}
      >
        {[1, 2, 3, 4].map((item, idx) => (
          <div key={idx} className={clsx('slide-page')}>
            page {item}
          </div>
        ))}
      </Slide>

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
        {[1, 2, 3, 4].map((item, idx) => (
          <div key={idx} className={clsx('slide-page', 'v')}>
            page {item}
          </div>
        ))}
      </Slide>
    </div>
  );
}
