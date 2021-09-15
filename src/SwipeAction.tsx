import React, { useRef, useImperativeHandle, useEffect, useLayoutEffect } from 'react';
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
};

const StyledSwipeAction = styled.div`
  user-select: none;
  position: relative;

  .left-part,
  .right-part {
    position: absolute;
    top: 0;
    height: 100%;

    > * {
      height: 100%;
    }
  }

  .left-part {
    left: 0;
    transform: translate(-100%);
  }
  .right-part {
    right: 0;
    transform: translate(100%);
  }
  .center-part {
    transition: transform 0.3s ease-in-out;
    display: block;
    line-height: 20px;
    padding: 13px 16px;
    background: #fff;
    border: 1px solid #eee;
    /* box-shadow: 0 1px 7px #edeef1; */
    font-size: 14px;
    color: #666;
    box-sizing: border-box;
  }
`;

/** SwipeAction 滑动操作 */
const SwipeAction = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { left, right, onClose, onOpen, children } = props;
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
  });
  useImperativeHandle(ref, () => elRef.current);

  useLayoutEffect(() => {
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;

    console.log(thisRef.current);
  }, [thisRef]);

  return (
    <StyledSwipeAction
      className={clsx('uc-swipe-action')}
      ref={(ref) => (thisRef.current.el = ref)}
    >
      <div ref={(ref) => (thisRef.current.leftEl = ref)} className={clsx('left-part')}>
        {left}
      </div>
      <FingerGestureElement
        ref={elRef}
        onSwipe={(e) => {
          e.preventDefault();
          const v = thisRef.current;
          if (e.direction === 'left' && right) {
            v.x = Math.abs(v.x) > v.rightWidth / 2 ? v.rightWidth : 0;
            v.el.style.transform = `translate3d(-${v.x}px,0,0)`;
            // show right
          } else if (e.direction === 'right' && left) {
            if (v.x < 0 && Math.abs(v.x) > v.rightWidth / 2) {
              v.el.style.transform = `translate3d(-${v.x}px,0,0)`;
            }
          }
        }}
        onPressMove={(e) => {
          e.preventDefault();
          const v = thisRef.current;
          v.x += e.deltaX;
          v.el.style.transform = `translate3d(${thisRef.current.x}px,0,0)`;
        }}
      >
        <div className="center-part">{children}</div>
      </FingerGestureElement>
      <div ref={(ref) => (thisRef.current.rightEl = ref)} className={clsx('right-part')}>
        {right}
      </div>
    </StyledSwipeAction>
  );
});

SwipeAction.displayName = 'UC-SwipeAction';

export default SwipeAction;
