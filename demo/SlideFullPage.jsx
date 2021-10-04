import React, { useEffect } from 'react';
import styled from '../src/styled';
import { Slide, AnimationElement } from '../src';
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
    const handler = (e) => e.preventDefault();
    window.addEventListener('touchmove', handler, { passive: false });

    return () => {
      window.removeEventListener('touchmove', handler);
    };
  }, []);

  return (
    <div>
      <Slide
        autoPlay={false}
        direction="horizontal"
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
              name={'fadeIn' + ['Left', 'Down', 'Right', 'Up'][idx]}
              delay="200ms"
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
