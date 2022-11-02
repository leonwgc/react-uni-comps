import React, { useRef } from 'react';
import PageWrap from './common/PageWrap';
import { styled, useMount, TouchElement, getThemeColorCss, Icon } from 'react-uni-comps';

const StyledDiv = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: fixed;
  bottom: 240px;
  right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getThemeColorCss('background')}
  color:#fff;
  font-size: 24px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  touch-action: none;
  transition: opacity 0.15s ease;
  -webkit-tap-highlight-color: transparent;
`;

export default function App() {
  const ref = useRef<HTMLDivElement>();
  const vRef = useRef({ x: 0, y: 0 });

  useMount(() => {
    const el = ref.current;
  });

  return (
    <PageWrap>
      <TouchElement
        ref={ref}
        onTouchStart={() => {
          ref.current!.style.opacity = '0.8';
        }}
        onTouchEnd={() => {
          ref.current!.style.opacity = '1';
        }}
        onPressMove={({ deltaX, deltaY }) => {
          vRef.current.x += deltaX;
          vRef.current.y += deltaY;
          ref.current!.style.transform = `translate3d(${vRef.current.x}px,${vRef.current.y}px,0)`;
        }}
      >
        <StyledDiv onClick={() => console.log('clicked')}>
          <Icon type="uc-icon-xiaoxi" />
        </StyledDiv>
      </TouchElement>
    </PageWrap>
  );
}
