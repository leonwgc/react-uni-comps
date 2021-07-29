import React, { useRef } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Styled from 'styled-components';
import { offset } from './dom';

let mousePosition: { x: number; y: number } | null;

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };

  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

const StyledMask = Styled.div<{ duration: number }>`
transition: opacity ${(props) => props.duration}ms ease-in-out 20ms;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    &.entering ,&.entered{
      background-color: rgba(0, 0, 0, 0.35);
      opacity: 1;
    }

    &.exiting,&.exited{
      opacity: 0;
      z-index: -1;
    }
`;

const StyledWrapper = Styled.div<{ duration: number }>`
 position: fixed;
 transition: all ${(props) => props.duration}ms ease-in-out;
  // bottom
  &.bottom {
    left: 0;
    bottom: 0;
  }


  &.entering,&.entered{
    transform: translate(0, 0);
  }

  &.exiting,&.exited{
    opacity:0;
  }


  &.bottom-exited,
  &.bottom-exiting {
    transform: translate(0, 100%);
  }

  // left
  &.left {
    left: 0;
    top: 0;
    bottom: 0;
  }


  &.left-exited,
  &.left-exiting {
    transform: translate(-100%, 0);
  }

  // right
  &.right {
    right: 0;
    top: 0;
    bottom: 0;
  }


  &.right-exited,
  &.right-exiting {
    transform: translate(100%, 0);
  }

  // top
  &.top {
    left: 0;
    top: 0;
    right: 0;
  }


  &.top-exited,
  &.top-exiting {
    transform: translate(0, -100%);
  }

  //center
  &.center {
    position:absolute;
    top:50%;
    left:50%;
      transform:translate(-50%,-50%) scale(1);
  }
  &.center-entering,
  &.center-entered {
    transform:translate(-50%,-50%) scale(1);
    opacity: 1;
  }

  &.center-exited,
  &.center-exiting {
    transform:translate(-50%,-50%) scale(0.2);
    opacity: 0;
  }
`;

export type Props = {
  visible?: boolean;
  width?: string | number;
  showMask?: boolean;
  onMaskClick?: () => void;
  position: 'top' | 'bottom' | 'left' | 'center' | 'right';
  duration?: number;
  mountContainer?: () => HTMLElement;
  children?: React.ReactNode;
  [p: string]: unknown;
};

const Popup: React.FC<Props> = ({
  children,
  visible,
  width = '100%',
  showMask = true,
  onMaskClick = null,
  position = 'bottom',
  duration = 240,
  mountContainer = () => document.body,
  style = {},
}) => {
  const wrapRef = useRef();

  const popStyle = {
    ...(style as React.CSSProperties),
    width,
  };

  const clickMask = (e) => {
    if (e.target === e.currentTarget && typeof onMaskClick === 'function') {
      onMaskClick();
    }
  };

  useEffect(() => {
    if (mousePosition) {
      const wrapEl = wrapRef.current as HTMLElement;
      const p = offset(wrapEl);
      wrapEl.style.transformOrigin = `${mousePosition.x - p.left}px ${mousePosition.y - p.top}px`;
    }
  }, [visible]);

  return ReactDOM.createPortal(
    <Transition in={visible} timeout={duration}>
      {(status) => (
        <div>
          {showMask ? (
            <StyledMask duration={duration} className={status} onClick={clickMask}></StyledMask>
          ) : null}
          <StyledWrapper
            ref={wrapRef}
            duration={duration}
            style={popStyle}
            className={`${position} ${status} ${position}-${status}`}
          >
            {children}
          </StyledWrapper>
        </div>
      )}
    </Transition>,
    mountContainer()
  );
};

export default Popup;
