import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import FingerGestureElement from './FingerGestureElement';
import styled from 'styled-components';
import useThisRef from './hooks/useThisRef';
import clsx from 'clsx';

type openType = 'left' | 'right';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  children: React.ReactNode;
  onOpen: (type: openType) => void;
  onClose: (type: openType) => void;
  /** 点击按钮后是否自动关闭 */
  autoClose?: boolean;
};

const StyledSwipeAction = styled.div`
  user-select: none;
  position: relative;
  display: block;

  .left-part,
  .right-part {
    position: absolute;
    top: 0;
    height: 100%;
  }

  .left-part {
    left: -1px;
    transform: translate(-100%);
  }
  .right-part {
    right: -1px;
    transform: translate(100%);
  }
  .center-part {
    display: block;
    line-height: 20px;
    padding: 13px 16px;
    background: #fff;
    font-size: 14px;
    color: #666;
    box-sizing: border-box;
  }
`;

/** SwipeAction 滑动操作 */
const SwipeAction = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { left, right, onClose, onOpen, autoClose = true, children } = props;
  const elRef = useRef();
  const thisRef = useThisRef({
    x: 0,
    onClose,
    onOpen,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0,
    lastMoveX: 0,
    isOpen: 0,
  });
  useImperativeHandle(ref, () => elRef.current);

  useLayoutEffect(() => {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);

  return (
    <FingerGestureElement
      ref={elRef}
      onTransitionEnd={() => {
        thisRef.current.el.style.transition = 'none';
      }}
      onClick={() => {
        if (autoClose) {
          const v = thisRef.current;
          v.el.style.transition = 'transform .3s ease-in-out';
          setTimeout(() => {
            v.el.style.transform = `translate3d(0,0,0)`;
          });
        }
      }}
      onTouchEnd={() => {
        const v = thisRef.current;

        if (v.x < 0) {
          // open right
          if (Math.abs(v.x) < v.rightWidth / 2) {
            // no more than half way
            v.el.style.transform = `translate3d(0,0,0)`;
            if (v.isOpen) {
              v.onClose?.('right');
              v.isOpen = 0;
            }
          } else {
            v.el.style.transform = `translate3d(-${v.rightWidth}px,0,0)`;
            if (!v.isOpen) {
              v.onOpen?.('right');
              v.isOpen = 1;
            }
          }
        } else if (v.x > 0) {
          if (Math.abs(v.x) < v.leftWidth / 2) {
            // no more than half way
            v.el.style.transform = `translate3d(0,0,0)`;
            if (v.isOpen) {
              v.onClose?.('left');
              v.isOpen = 0;
            }
          } else {
            v.el.style.transform = `translate3d(${v.leftWidth}px,0,0)`;
            if (!v.isOpen) {
              v.onOpen?.('left');
              v.isOpen = 1;
            }
          }
        }
      }}
      onPressMove={(e) => {
        e.preventDefault();
        const v = thisRef.current;
        v.lastMoveX = e.deltaX;
        v.x += e.deltaX;
        // x<0:swipe left & show right
        if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
          v.el.style.transform = `translate3d(${v.x}px,0,0)`;
        } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
          v.el.style.transform = `translate3d(${v.x}px,0,0)`;
        }
      }}
    >
      <StyledSwipeAction className={clsx('uc-swipe-action')}>
        <div ref={(ref) => (thisRef.current.leftEl = ref)} className={clsx('left-part')}>
          {left}
        </div>

        <div className="center-part">{children}</div>

        <div ref={(ref) => (thisRef.current.rightEl = ref)} className={clsx('right-part')}>
          {right}
        </div>
      </StyledSwipeAction>
    </FingerGestureElement>
  );
});

SwipeAction.displayName = 'UC-SwipeAction';

export default SwipeAction;
