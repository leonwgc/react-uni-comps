import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import clsx from 'clsx';
import Button from './Button';
import Touch from 'w-touch';
import useClickAway from './hooks/useClickAway';
import useUpdateEffect from './hooks/useUpdateEffect';
import useLatest from './hooks/useLatest';
import { prefixClassName } from './helper';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';

const getClassName = prefixClassName('uc-swipe-action');

type Action = {
  text: string;
  color?: string;
  onClick?: () => void;
};

type Props = {
  /** 左边actions */
  left?: Action[];
  /** 右边actions */
  right?: Action[];
  /** 显示回调 */
  onOpen?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
  /** 点击按钮后是否自动关闭
   * @default true
   */
  autoClose?: boolean;
  /**
   * 点击外部区域关闭
   * @default true
   * */
  closeOnClickOutside?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledSwipeAction = styled.div`
  user-select: none;
  position: relative;
  display: block;
  overflow: hidden;
  cursor: grab;
  box-sizing: border-box;

  .${getClassName('wrap')} {
    transition: transform 0.3s ease-in-out;
    overflow: visible;
    display: flex;
    flex-wrap: nowrap;

    .${getClassName('left')}, .${getClassName('right')} {
      position: absolute;
      top: 0;
      height: 100%;
    }

    .${getClassName('left')} {
      left: 0px;
      transform: translate3d(-100%, 0, 0);
    }
    .${getClassName('right')} {
      right: 0px;
      transform: translate3d(100%, 0, 0);
    }
    .${getClassName('middle')} {
      width: 100%;
      box-sizing: border-box;
      position: relative;
      height: 44px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      background: #fff;
      color: #666;
      box-sizing: border-box;
    }

    .${getClassName('item')} {
      * {
        pointer-events: none;
      }
    }
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
    className,
    children,
    ...rest
  } = props;
  const elRef = useRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);

  const thisRef = useRef({
    x: 0,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0,
  });

  const onOpenRef = useLatest(onOpen);
  const onCloseRef = useLatest(onClose);

  useUpdateEffect(() => {
    if (isOpen) {
      onOpenRef.current?.();
    } else {
      onCloseRef.current?.();
    }
  }, [isOpen]);

  const startTransform = useCallback((transformStr, x) => {
    const v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    v.el.style.transform = `${transformStr}`;
  }, []);

  useClickAway(elRef, () => {
    if (closeOnClickOutside) {
      startTransform('translate3d(0,0,0)', 0);
      setIsOpen(false);
    }
  });

  useIsomorphicLayoutEffect(() => {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);

  const renderAction = useCallback((item, idx) => {
    return (
      <StyledButton
        onClick={item.onClick}
        key={idx}
        className={getClassName('item')}
        style={{ backgroundColor: item.color || vars.primary }}
      >
        {item.text}
      </StyledButton>
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    const el = elRef.current;
    const fg = new Touch(el, {
      onPressMove: (e) => {
        const v = thisRef.current;
        v.x += e.deltaX;
        // x<0:swipe left & show right
        if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
          v.el.style.transform = `translate3d(${v.x}px,0,0)`;
        } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
          v.el.style.transform = `translate3d(${v.x}px,0,0)`;
        }
      },
      onTouchStart: () => {
        thisRef.current.el.style.transitionProperty = 'none';
      },
      onTouchEnd: () => {
        const v = thisRef.current;

        if (v.x < 0) {
          // open right
          if (Math.abs(v.x) < v.rightWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            setIsOpen(false);
          } else {
            startTransform(`translate3d(-${v.rightWidth}px,0,0)`, -1 * v.rightWidth);
            setIsOpen(true);
          }
        } else if (v.x > 0) {
          if (Math.abs(v.x) < v.leftWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            v.x = 0;
            setIsOpen(false);
          } else {
            startTransform(`translate3d(${v.leftWidth}px,0,0)`, v.leftWidth);
            setIsOpen(true);
          }
        }
      },
    });

    return () => {
      fg?.destroy();
    };
  }, [startTransform]);

  return (
    <StyledSwipeAction {...rest} ref={ref} className={clsx(getClassName(), className)}>
      <div
        ref={elRef}
        className={getClassName('wrap')}
        onClick={(e: any) => {
          if (autoClose && e.target?.classList?.contains(getClassName('item'))) {
            startTransform('translate3d(0,0,0)', 0);
            setIsOpen(false);
          }
        }}
      >
        <div ref={(ref) => (thisRef.current.leftEl = ref)} className={getClassName('left')}>
          {left.map((item, idx) => renderAction(item, idx))}
        </div>

        <div className={getClassName('middle')}>{children}</div>

        <div ref={(ref) => (thisRef.current.rightEl = ref)} className={getClassName('right')}>
          {right.map((item, idx) => renderAction(item, idx))}
        </div>
      </div>
    </StyledSwipeAction>
  );
});

SwipeAction.displayName = 'UC-SwipeAction';

export default SwipeAction;
