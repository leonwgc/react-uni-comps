//#region  imports & styles
import React, { useState, useRef, useCallback, useEffect, useImperativeHandle } from 'react';
import styled from 'styled-components';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import Touch from 'w-touch';
import Space from './Space';
import type { StringOrNumber } from './types';
import useMount from './hooks/useMount';
import { prefixClassName } from './helper';
import useLatest from './hooks/useLatest';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';

const getClassName = prefixClassName('uc-slide');

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .${getClassName('wrap')} {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    touch-action: none;
    width: 100%;
    transition-property: transform;
    backface-visibility: hidden;

    &.vertical {
      flex-direction: column;
    }
  }
  .${getClassName('page')} {
    width: 100%;
    flex-shrink: 0;
  }

  .${getClassName('indicator')} {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    line-height: 6px;

    .${getClassName('item')} {
      cursor: pointer;
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #fff;
      transition: all 0.3s ease;
      border-radius: 50%;

      &.active {
        border-radius: 3px;
        width: 14px;
      }
    }

    &.vertical {
      position: absolute;
      right: 6px;
      top: 50%;
      left: unset;
      bottom: unset;
      transform: translate3d(0, -50%, 0);

      .${getClassName('item')} {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;

        &.active {
          border-radius: 3px;
          height: 14px;
        }
      }
    }
  }
`;

//#endregion

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 是否自动播放
   */
  autoPlay?: boolean;
  /**
   * 水平还是垂直
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 距离下一次播放的间隔毫秒
   * @default 3000
   */
  interval?: number;
  /**
   * 容器高度
   * @default 160
   */
  height?: StringOrNumber;

  /**
   * 是否循环
   * @default true
   */
  loop?: boolean;
  /** 页面切换后回调 */
  onPageChange?: (pageIndex: number) => void;
  /**
   * 是否显示分页器
   * @default true
   */
  showPageIndicator?: boolean;
  /**
   * 滑动比例多少切换
   * @default 0.1
   */
  ratio?: number;
  /**
   * 动画时间
   * @default 280
   */
  duration?: number;
  /**
   * 分页容器样式
   *
   */
  pageStyle?: React.CSSProperties;
  /**
   * 分页容器类名
   *
   */
  pageClassName?: string;
};

export type SlideRefType = {
  prev: () => void;
  next: () => void;
};

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
      className: clsx(getClassName('page'), c.props?.className),
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
    duration = 280,
    children,
    className,
    height = 160,
    style,
    showPageIndicator = true,
    ratio = 0.1,
    pageStyle,
    pageClassName,
    ...rest
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const wrapElRef = useRef<HTMLDivElement>();
  const pageWrapElRef = useRef<HTMLDivElement>();

  const [items, setItems] = useState(() => getItems(children, loop, height));

  const count = items.length;
  const len = React.Children.count(children);

  const [pageIndex, setPageIndex] = useState<number>(0); // !loop:0~len-1, loop: -1~len
  const exp = count > len; // expanded

  const min = exp ? -1 : 0;
  const max = exp ? len : len - 1;
  const pageIndexRef = useLatest(pageIndex);

  const propsRef = useLatest({
    exp,
    ratio,
    direction,
    pageIndex,
    len,
    min,
    max,
    count,
  });

  const thisRef = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    isMoving: false,
    timer: 0,
  });

  const slideToPageIndex = useCallback((newPageIndex: number, transition = true) => {
    const { direction, exp } = propsRef.current;
    const el = wrapElRef.current;

    if (el) {
      const { offsetWidth: wrapWidth, offsetHeight: wrapHeight } = containerRef.current;
      el.style.transitionProperty = transition ? 'transform' : 'none';
      if (direction === 'horizontal') {
        const x = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapWidth;
        el.style.transform = `translate3d(${x}px, 0, 0)`;
        thisRef.current.x = x;
      } else {
        const y = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapHeight;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
        thisRef.current.y = y;
      }

      setPageIndex(newPageIndex);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    prev: () => {
      slideToPageIndex(Math.max(min, pageIndex - 1));
    },
    next: () => {
      slideToPageIndex(Math.min(max, pageIndex + 1));
    },
  }));

  useUpdateEffect(() => {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange?.(pageIndex);
    }
  }, [pageIndex]);

  useMount(() => {
    slideToPageIndex(0, false);
  });

  useUpdateEffect(() => {
    const items = getItems(children, loop, height);
    setItems(items);
    const count = React.Children.count(children);
    propsRef.current.exp = items.length > count;
    propsRef.current.count = count;

    if (pageIndexRef.current >= count - 1) {
      slideToPageIndex(count - 1);
    } else if (pageIndexRef.current <= -1) {
      slideToPageIndex(0);
    }
  }, [children, loop, height]);

  useEffect(() => {
    const len = React.Children.count(children);
    if (autoPlay && len > 1 && !thisRef.current.isMoving) {
      thisRef.current.timer = window.setInterval(() => {
        if (!thisRef.current.isMoving) {
          slideToPageIndex(pageIndexRef.current + 1);
        }
      }, interval);

      return () => {
        window.clearInterval(thisRef.current.timer);
      };
    }
  }, [autoPlay, interval, children]);

  useIsomorphicLayoutEffect(() => {
    const el = wrapElRef.current;
    const { offsetWidth: wrapWidth, offsetHeight: wrapHeight } = containerRef.current;

    const fg = new Touch(el, {
      onTouchStart: () => {
        el.style.transitionProperty = 'none';
        thisRef.current.isMoving = true;
        thisRef.current.lastX = thisRef.current.x;
        thisRef.current.lastY = thisRef.current.y;
      },
      onTouchEnd: () => {
        if (!thisRef.current.isMoving) {
          return;
        }

        thisRef.current.isMoving = false;
        const { ratio, pageIndex, max, len, exp } = propsRef.current;

        if (exp && (max === pageIndex || min === pageIndex)) {
          slideToPageIndex(pageIndex === max ? 0 : len - 1, false);
          return;
        }

        if (
          direction === 'horizontal' &&
          Math.abs(thisRef.current.x - thisRef.current.lastX) > wrapWidth * ratio
        ) {
          slideToPageIndex(pageIndex + (thisRef.current.x < thisRef.current.lastX ? 1 : -1));
        } else if (
          direction === 'vertical' &&
          Math.abs(thisRef.current.y - thisRef.current.lastY) > wrapHeight * ratio
        ) {
          slideToPageIndex(pageIndex + (thisRef.current.y < thisRef.current.lastY ? 1 : -1));
        } else {
          // reset
          slideToPageIndex(pageIndex);
        }
      },
      onPressMove: (e) => {
        const { pageIndex, max, exp, count, direction } = propsRef.current;

        if (exp && (max === pageIndex || min === pageIndex)) {
          return;
        }

        if (direction === 'horizontal') {
          if (thisRef.current.x > 0 || thisRef.current.x < -1 * (count - 1) * wrapWidth) {
            return;
          }
          thisRef.current.x += e.deltaX;
          el.style.transform = `translate3d(${thisRef.current.x}px, 0, 0)`;
        } else {
          if (thisRef.current.y > 0 || thisRef.current.y < -1 * (count - 1) * wrapHeight) {
            return;
          }
          thisRef.current.y += e.deltaY;
          el.style.transform = `translate3d(0, ${thisRef.current.y}px, 0)`;
        }
      },
    });
    return () => fg.destroy();
  }, []);

  return (
    <StyledSlide
      ref={containerRef}
      {...rest}
      className={clsx(getClassName(), className)}
      style={{ ...style, height }}
    >
      <div
        ref={wrapElRef}
        className={clsx(getClassName('wrap'), { vertical: direction === 'vertical' })}
        onTransitionEnd={() => {
          if (pageIndex >= len) {
            slideToPageIndex(0, false);
          } else if (pageIndex === -1) {
            slideToPageIndex(len - 1, false);
          }
        }}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {items}
      </div>

      {showPageIndicator && len > 1 && (
        <Space
          size={4}
          direction={direction}
          ref={pageWrapElRef}
          className={clsx(getClassName('indicator'), pageClassName, {
            vertical: direction === 'vertical',
          })}
          style={pageStyle}
        >
          {React.Children.map(children, (c, idx) => (
            <span
              key={idx}
              className={clsx(getClassName('item'), { active: pageIndex === idx })}
              onClick={() => slideToPageIndex(idx)}
            ></span>
          ))}
        </Space>
      )}
    </StyledSlide>
  );
});

Slide.displayName = 'UC-Slide';

export default Slide;
