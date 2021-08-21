import React from 'react';
import styled from 'styled-components';
import { Spinner, Slide, TransitionElement, AnimationElement } from '../src';
import clsx from 'clsx';
import 'animate.css';
import './Slide.less';

export default function App() {
  return (
    <div>
      <Slide
        autoplay={false}
        direction="horizontal"
        height="100vh"
        style={{ width: '100vw', margin: '-20px', fontSize: 46 }}
      >
        {['#004bcc', 'pink', '#00bc8d', '#666'].map((item, idx) => (
          <div key={idx} className={clsx('slide-page', 'v')} style={{ background: item }}>
            <AnimationElement
              name="fadeInLeft"
              delay="200ms"
              once={false}
              timingFunc="ease-out"
              duration="300ms"
            >
              <span>page {item}</span>
            </AnimationElement>
          </div>
        ))}
      </Slide>
    </div>
  );
}
