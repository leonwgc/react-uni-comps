import React, { useRef, useImperativeHandle, useLayoutEffect, useCallback, useEffect } from 'react';
import FingerGestureElement from './FingerGestureElement';
import styled from 'styled-components';
import useThisRef from './hooks/useThisRef';
import * as colors from './colors';
import clsx from 'clsx';
import Button from './Button';

type openType = 'left' | 'right';

type Action = {
  text: string;
  color?: string;
  onClick?: () => void;
};

type Props = {
  left?: Action[];
  right?: Action[];
  children: React.ReactNode;
  onOpen: (type: openType) => void;
  onClose: (type: openType) => void;
  /** 点击按钮后是否自动关闭,默认true */
  autoClose?: boolean;
  /** 点击外部区域关闭,默认true*/
  closeOnClickOutside?: boolean;
};

const StyledSwipeAction = styled.div`
  user-select: none;
  position: relative;
  display: block;
  transition: transform 0.3s ease-in-out;

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

const StyledButton = styled(Button)`
  height: 100%;
  border-radius: 0;
  border: 0;
  color: #fff;
  font-size: 15px;
`;

/** SwipeAction 滑动操作 */
const SwipeAction = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    left = [],
    right = [],
    onClose,
    onOpen,
    autoClose = true,
    closeOnClickOutside = true,
    children,
  } = props;
  const elRef = useRef();
  const thisRef = useThisRef({
    x: 0,
    onClose,
    onOpen,
    closeOnClickOutside,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0,
    isOpen: 0,
  });
  useImperativeHandle(ref, () => elRef.current);

  useEffect(() => {
    const v = thisRef.current;
    if (v.closeOnClickOutside) {
      const closeHandler = (e) => {
        if (!v.isOpen) {
          return;
        }

        if (!v.el.contains(e.target)) {
          startTransform('translate3d(0,0,0)', 0);
          v.x = 0;
        }
      };
      window.addEventListener('click', closeHandler);

      return () => {
        window.removeEventListener('click', closeHandler);
      };
    }
  }, []);

  useLayoutEffect(() => {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);

  const startTransform = useCallback(
    (transformStr, x) => {
      const v = thisRef.current;
      v.x = x;
      v.el.style.transitionProperty = 'transform';
      setTimeout(() => {
        v.el.style.transform = `${transformStr}`;
      });
    },
    [thisRef]
  );

  const renderAction = useCallback((item, idx) => {
    return (
      <StyledButton
        onClick={item.onClick}
        key={idx}
        style={{ backgroundColor: item.color || colors.primary }}
      >
        {item.text}
      </StyledButton>
    );
  }, []);

  return (
    <FingerGestureElement
      ref={elRef}
      onTransitionEnd={() => {
        thisRef.current.el.style.transitionProperty = 'transform';
      }}
      onClick={() => {
        if (autoClose) {
          startTransform('translate3d(0,0,0)', 0);
        }
      }}
      onTouchStart={() => {
        thisRef.current.el.style.transitionProperty = 'none';
      }}
      onTouchEnd={() => {
        const v = thisRef.current;

        if (v.x < 0) {
          // open right
          if (Math.abs(v.x) < v.rightWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            // v.x = 0;
            if (v.isOpen) {
              v.onClose?.('right');
              v.isOpen = 0;
            }
          } else {
            startTransform(`translate3d(-${v.rightWidth}px,0,0)`, -1 * v.rightWidth);
            // v.x = -1 * v.rightWidth;
            if (!v.isOpen) {
              v.onOpen?.('right');
              v.isOpen = 1;
            }
          }
        } else if (v.x > 0) {
          if (Math.abs(v.x) < v.leftWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            v.x = 0;
            if (v.isOpen) {
              v.onClose?.('left');
              v.isOpen = 0;
            }
          } else {
            startTransform(`translate3d(${v.leftWidth}px,0,0)`, v.leftWidth);
            // v.x = v.leftWidth;
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
          {left.map((item, idx) => renderAction(item, idx))}
        </div>

        <div className="center-part">{children}</div>

        <div ref={(ref) => (thisRef.current.rightEl = ref)} className={clsx('right-part')}>
          {right.map((item, idx) => renderAction(item, idx))}
        </div>
      </StyledSwipeAction>
    </FingerGestureElement>
  );
});

SwipeAction.displayName = 'UC-SwipeAction';

export default SwipeAction;
