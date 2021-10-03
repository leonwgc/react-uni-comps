import React, { useState, useEffect } from 'react';
import styled from '../src/styled';
import { Slide, AnimationElement } from '../src';
import clsx from 'clsx';
import 'animate.css';

const StyledSlidePage = styled.div`
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export default function SlideFullPage() {
  useEffect(() => {
    document.body.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);

  return (
    <div>
      <Slide
        autoPlay={false}
        direction="vertical"
        height="100vh"
        showDot={false}
        loop={false}
        ratio={0.1}
      >
        {['#004bcc', 'pink', '#00bc8d', '#666'].map((color, idx) => (
          <StyledSlidePage
            key={idx}
            style={{
              background: color,
            }}
          >
            <AnimationElement
              name="fadeInLeft"
              delay="200ms"
              once={false}
              timingFunc="ease-in-out"
              duration="300ms"
            >
              <span>page {idx + 1}</span>
            </AnimationElement>
          </StyledSlidePage>
        ))}
      </Slide>
    </div>
  );
}
