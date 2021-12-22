import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
  useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import { isTouch } from './dom';
import { animationSlow } from './vars';

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .wrap {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    transition: transform ${animationSlow}ms ease-in-out;
    touch-action: none;

    &.vertical {
      flex-direction: column;
    }

    .uc-slide-page {
      backface-visibility: hidden;
      width: 100%;
      flex-shrink: 0;
    }
  }

  .uc-slide-dot-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      transition: all ease-in-out 0.3s;

      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }

    &.vertical {
      position: absolute;
      right: 8px;
      top: 50%;
      left: unset;
      transform: translateY(-50%);

      .dot {
        display: block;
        margin: 4px 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #eee;

        &.active {
          width: 8px;
          height: 20px;
          border-radius: 5px;
        }
      }
    }
  }
`;

export type Props = {
  /** 自动播放,默认false */
  autoPlay?: boolean;
  // /** 水平还是垂直播放 */
  direction?: 'horizontal' | 'vertical';
  /** 距离下一次播放的间隔毫秒, 默认 3000 */
  interval?: number;
  children: React.ReactElement[];
  /** 容器高度，默认160px */
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  /** 循环播放,默认true */
  loop?: boolean;
  /** 页面切换后回调 */
  onPageChange?: (pageIndex: number) => void;
  /** 是否显示分页圆点,默认true */
  showDot?: boolean;
  /** 滑动比例多少切换，默认0.1 */
  ratio?: number;
};

export interface SlideRefType {
  prev: () => void;
  next: () => void;
}

const getItems = (children, loop, height) => {
  const items = [].concat(children),
    firstItem = items[0],
    lastItem = items[items.length - 1];

  if (loop && items.length > 1) {
    items.push(firstItem);
    items.unshift(lastItem);
  }

  return React.Children.map(items, (c, index) =>
    React.cloneElement(c, {
      key: index,
      className: clsx('uc-slide-page', c.props?.className),
      style: { ...c.props?.style, height },
    })
  );
};

/**
 *  轮播
 *
 *  ref: {
 *    prev: () => void;
 *    next: () => void;
 * }
 *
 *
 */
const Slide = React.forwardRef<SlideRefType, Props>((props, ref) => {
  const {
    autoPlay = false,
    loop = true,
    onPageChange,
    direction = 'horizontal',
    interval = 3000,
    children,
    className,
    height = 160,
    style,
    showDot = true,
    ratio = 0.1,
    ...rest
  } = props;

  const containerRef = useRef<HTMLDivElement>();

  const wrapElRef = useRef<HTMLDivElement>();

  const [items, setItems] = useState(() => getItems(children, loop, height));

  const count = items.length;
  const len = React.Children.count(children);

  const thisRef = useRef({
    x: 0,
    lastX: 0,
    y: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    isMoving: false,
  });
  const [pageIndex, setPageIndex] = useState<number>(0); // !loop:0~len-1, loop: -1~len
  const exp = count > len; // expanded

  const slideToPageIndex = useCallback(
    (newPageIndex: number, transition = true) => {
      const s = thisRef.current;

      wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';
      if (direction === 'horizontal') {
        const x = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapWidth;
        wrapElRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        s.x = x;
      } else {
        const y = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapHeight;
        wrapElRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
        s.y = y;
      }

      setPageIndex(newPageIndex);
    },
    [thisRef, direction, exp]
  );

  useImperativeHandle(ref, () => ({
    prev: () => {
      const min = exp ? -1 : 0;
      slideToPageIndex(Math.max(min, pageIndex - 1));
    },
    next: () => {
      const max = exp ? len : len - 1;
      slideToPageIndex(Math.min(max, pageIndex + 1));
    },
  }));

  const ensurePageIndex = useCallback(() => {
    if (pageIndex >= len) {
      slideToPageIndex(0, false);
    } else if (pageIndex === -1) {
      slideToPageIndex(len - 1, false);
    }
  }, [slideToPageIndex, len, pageIndex]);

  useUpdateEffect(() => {
    setItems(getItems(children, loop, height));
    slideToPageIndex(0, false);
  }, [children, loop, height, slideToPageIndex]);

  useUpdateEffect(() => {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange?.(pageIndex);
    }
  }, [pageIndex]);

  useLayoutEffect(() => {
    const s = thisRef.current;
    const container = containerRef.current;
    s.wrapWidth = container.offsetWidth;
    s.wrapHeight = container.offsetHeight;

    slideToPageIndex(0, false);
  }, [slideToPageIndex]);

  useEffect(() => {
    if (autoPlay && len > 1) {
      const timer = window.setTimeout(() => {
        slideToPageIndex(pageIndex + 1);
      }, interval);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [pageIndex, slideToPageIndex, autoPlay, interval, len, exp]);

  const dotRender = (): React.ReactNode => {
    if (!showDot || len <= 1) return null;

    return (
      <div className={clsx('uc-slide-dot-wrapper', { vertical: direction === 'vertical' })}>
        {React.Children.map(children, (c, idx) => (
          <span
            key={idx}
            className={clsx('dot', { active: pageIndex === idx })}
            onClick={() => slideToPageIndex(idx)}
          ></span>
        ))}
      </div>
    );
  };

  const touchEnd = useCallback(() => {
    const s = thisRef.current;
    if (!s.isMoving) {
      return;
    }
    s.isMoving = false;

    if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
      slideToPageIndex(pageIndex + (s.x < s.lastX ? 1 : -1));
    } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
      slideToPageIndex(pageIndex + (s.y < s.lastY ? 1 : -1));
    } else {
      // reset
      slideToPageIndex(pageIndex);
    }
  }, [direction, pageIndex, ratio, slideToPageIndex]);

  useLayoutEffect(() => {
    const el = wrapElRef.current;

    const touchStart = (e) => {
      e.preventDefault();
      const s = thisRef.current;
      s.isMoving = true;
      wrapElRef.current.style.transitionProperty = 'none';
      s.lastX = s.x;
      s.lastY = s.y;
    };

    el.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

    if (!isTouch) {
      document.addEventListener('mouseup', touchEnd);
    } else {
      el.addEventListener('touchend', touchEnd);
    }

    return () => {
      el.removeEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

      if (!isTouch) {
        document.removeEventListener('mouseup', touchEnd);
      } else {
        el.removeEventListener('touchend', touchEnd);
      }
    };
  }, [touchEnd]);

  return (
    <StyledSlide
      ref={containerRef}
      {...rest}
      className={clsx('uc-slide', className)}
      style={{ ...style, height }}
    >
      <FingerGestureElement
        ref={wrapElRef}
        onPressMove={(e) => {
          e.preventDefault();
          const s = thisRef.current;

          if (direction === 'horizontal') {
            if (s.x > 0 || s.x < -1 * (count - 1) * s.wrapWidth) {
              return;
            }
            s.x += e.deltaX;
            wrapElRef.current.style.transform = `translate3d(${s.x}px, 0, 0)`;
          } else {
            if (s.y > 0 || s.y < -1 * (count - 1) * s.wrapHeight) {
              return;
            }
            s.y += e.deltaY;
            wrapElRef.current.style.transform = `translate3d(0, ${s.y}px, 0)`;
          }
        }}
      >
        <div
          className={clsx('wrap', { vertical: direction === 'vertical' })}
          onTransitionEnd={() => {
            ensurePageIndex();
          }}
        >
          {items}
        </div>
      </FingerGestureElement>
      {dotRender()}
    </StyledSlide>
  );
});

Slide.displayName = 'UC-Slide';

export default Slide;
