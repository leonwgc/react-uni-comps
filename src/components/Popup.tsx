import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const StyledMask = styled.div<{ duration: number }>`
  transition: opacity ${(props) => props.duration}ms ease-out 20ms;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  &.entering,
  &.entered {
    background-color: rgba(0, 0, 0, 0.35);
    opacity: 1;
  }

  &.exiting,
  &.exited {
    opacity: 0;
    z-index: -1;
  }
`;

const StyledWrapper = styled.div<{ duration: number }>`
  position: fixed;
  transition: all ${(props) => props.duration}ms ease-out;
  // bottom
  &.bottom {
    left: 0;
    bottom: 0;
  }

  &.entering,
  &.entered {
    transform: translate(0, 0);
  }

  &.exiting,
  &.exited {
    opacity: 0;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  &.center-entering,
  &.center-entered {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  &.center-exited,
  &.center-exiting {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`;

export type Props = {
  visible?: boolean;
  showMask?: boolean;
  onMaskClick?: () => void;
  position: 'top' | 'bottom' | 'left' | 'center' | 'right';
  duration?: number;
  mountContainer?: () => HTMLElement;
  children?: React.ReactNode;
  style?: React.CSSProperties; // wrapper style
  className?: string; // wrapper className
};

const Popup: React.FC<Props> = ({
  children,
  visible,
  showMask = true,
  onMaskClick = null,
  position = 'bottom',
  duration = 240,
  mountContainer = () => document.body,
  style = {},
  className = '',
}) => {
  const wrapRef = useRef();

  const clickMask = (e) => {
    if (e.target === e.currentTarget && typeof onMaskClick === 'function') {
      onMaskClick();
    }
  };

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
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
            style={style}
            className={`react-uni-comps-popup ${className} ${position} ${status} ${position}-${status}`}
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
