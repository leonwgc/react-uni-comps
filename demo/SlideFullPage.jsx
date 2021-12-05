import React from 'react';
import { Slide, AnimationElement, styled } from 'react-uni-comps';
import 'animate.css';

const StyledSlidePage = styled.div`
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export default function SlideFullPage() {
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
              name={'fadeIn' + ['Left', 'Down', 'Right', 'Up'][idx]}
              delay="200ms"
              timingFunc="ease-in-out"
              duration="160ms"
            >
              <span>page {idx + 1}</span>
            </AnimationElement>
          </StyledSlidePage>
        ))}
      </Slide>
    </div>
  );
}
