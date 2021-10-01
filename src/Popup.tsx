import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Mask from './Mask';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledWrapper = styled.div<{ duration: number }>`
  position: fixed;
  z-index: 200;
  transition: transform ${(props) => props.duration}ms ease;
  // bottom
  &.bottom {
    left: 0;
    bottom: 0;
  }

  &.entering,
  &.entered {
    transition-timing-function: ease-out;
    transform: none;
    visibility: visible;
  }

  &.exiting {
    transition-timing-function: ease-in;
  }

  &.exited {
    visibility: hidden;
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
    position: fixed;
    top: 50%;
    left: 50%;
    transition: none;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    90% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.01);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  &.center-entering,
  &.center-entered {
    display: '';
    animation: showUp ease ${(props) => props.duration}ms forwards;
  }

  &.center-exited,
  &.center-exiting {
    display: none;
  }

  &.no-trasition {
    animation: none;
    transition: none;
  }
`;

export type Props = {
  /** 是否可见 */
  visible?: boolean;
  /** 是否显示遮罩，默认显示 */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
  /** 遮罩点击事件 */
  onMaskClick?: () => void;
  /** 弹框弹出位置，从上，下，左，右，中间 弹出 */
  position: 'top' | 'bottom' | 'left' | 'center' | 'right';
  /** 弹出动画时间，默认280ms */
  duration?: number;
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement;
  /** 弹框里面的内容 */
  children?: React.ReactNode;
  /** 弹框style */
  style?: React.CSSProperties;
  /** 弹框className */
  className?: string;
};

/** 弹框，可以从上，下，左，右，中间弹出 */
const Popup = (props: Props): React.ReactElement => {
  const {
    children,
    visible,
    mask = true,
    maskStyle,
    maskClass,
    onMaskClick,
    position = 'bottom',
    duration = 160,
    mountContainer,
    style,
    className,
  } = props;
  const wrapRef = useRef();

  const mountNode = mountContainer?.() || document.body;
  const showPosition = mountNode === document.body ? 'fixed' : 'absolute';

  return ReactDOM.createPortal(
    <div className={clsx('uc-popup-container-' + position)}>
      {mask && visible ? (
        <Mask className={maskClass} style={maskStyle} onClick={onMaskClick} />
      ) : null}
      <Transition in={visible} timeout={duration}>
        {(status) => (
          <StyledWrapper
            ref={wrapRef}
            duration={duration}
            style={{ ...style, position: showPosition }}
            className={clsx('uc-popup-wrap', className, position, status, position + '-' + status)}
          >
            {children}
          </StyledWrapper>
        )}
      </Transition>
    </div>,
    mountNode
  );
};

export default Popup;
