import React, { useRef } from 'react';
import styled from 'styled-components';
import { TouchElement } from 'w-touch';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';

type Props = {
  /**
   *是否可以水平移动
   *
   * @default true
   */
  x?: boolean;
  /**
   *是否可以垂直移动
   *
   * @default true
   */
  y?: boolean;
  /**
   *  子元素
   *
   */
} & React.HTMLAttributes<HTMLDivElement>;

const StyledWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: fixed;
  bottom: 48px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getThemeColorCss('background')}
  color:#fff;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  touch-action: none;
  transition: opacity 0.15s ease;
  -webkit-tap-highlight-color: transparent;
`;

/** 浮动气泡  */
const FloatingBubble: React.FC<Props> = (props) => {
  const { x = true, y = true, className, children, ...rest } = props;
  const ref = React.createRef<HTMLElement>();
  const vRef = useRef({ x: 0, y: 0 });

  return (
    <TouchElement
      ref={ref}
      onTouchStart={() => {
        ref.current.style.opacity = '0.8';
      }}
      onTouchEnd={() => {
        ref.current.style.opacity = '1';
      }}
      onPressMove={({ deltaX, deltaY }) => {
        if (x) {
          vRef.current.x += deltaX;
        }
        if (y) {
          vRef.current.y += deltaY;
        }

        if (x || y) {
          ref.current.style.transform = `translate3d(${vRef.current.x}px,${vRef.current.y}px,0)`;
        }
      }}
    >
      <StyledWrap className={clsx('uc-floating-bubble', className)} {...rest}>
        {children}
      </StyledWrap>
    </TouchElement>
  );
};

FloatingBubble.displayName = 'UC-FloatingBubble';

export default FloatingBubble;
