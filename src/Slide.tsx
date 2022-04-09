import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
  useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import Touch from 'w-touch';
import Space from './Space';
import type { BaseProps } from './types';
import useMount from './hooks/useMount';

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .wrap {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    touch-action: none;
    width: 100%;
    transform-style: preserve-3d;
    transition-property: transform;

    &.vertical {
      flex-direction: column;
    }

    .uc-slide-page {
      width: 100%;
      flex-shrink: 0;
    }
  }

  .pager {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    line-height: 4px;

    .item {
      cursor: pointer;
      display: inline-block;
      width: 8px;
      height: 4px;
      border-radius: 2px;
      background-color: #fff;
      opacity: 0.4;

      &.active {
        opacity: 1;
      }
    }

    &.vertical {
      position: absolute;
      right: 8px;
      top: 50%;
      left: unset;
      transform: translate3d(0, -50%, 0);

      .item {
        display: block;
        width: 4px;
        height: 8px;
      }
    }
  }
`;

type Direction = 'horizontal' | 'vertical';

export type Props = {
  /**
   * 是否自动播放
   * @default false
   */
  autoPlay?: boolean;
  /**
   * 水平还是垂直
   * @default horizontal
   */
  direction?: Direction;
  /**
   * 距离下一次播放的间隔毫秒
   * @default 3000
   */
  interval?: number;
  children: React.ReactElement[];
  /**
   * 容器高度
   * @default 160
   */
  height?: number | string;

  /**
   * 是否循环
   * true
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
} & BaseProps;

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
    duration = 280,
    children,
    className,
    height = 160,
    style,
    showPageIndicator = true,
    ratio = 0.1,
    ...rest
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const wrapElRef = useRef<HTMLDivElement>();

  const [items, setItems] = useState(() => getItems(children, loop, height));

  const count = items.length;
  const len = React.Children.count(children);

  const [pageIndex, setPageIndex] = useState<number>(0); // !loop:0~len-1, loop: -1~len
  const exp = count > len; // expanded

  const min = exp ? -1 : 0;
  const max = exp ? len : len - 1;

  const thisRef = useRef<{
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    wrapHeight: number;
    wrapWidth: number;
    isMoving: boolean;
    pageIndex: number;
    min: number;
    max: number;
    exp: boolean;
    len: number;
    ratio: number;
    direction?: Direction;
    timer?: number;
  }>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    isMoving: false,
    pageIndex,
    min,
    max,
    exp,
    len,
    ratio,
    direction,
  });

  thisRef.current = { ...thisRef.current, pageIndex, min, max, exp, len, ratio, direction };

  const slideToPageIndex = useCallback(
    (newPageIndex: number, transition = true) => {
      const $this = thisRef.current;
      const { wrapWidth, wrapHeight, direction, exp } = thisRef.current;
      const el = wrapElRef.current;

      if (el) {
        el.style.transitionProperty = transition ? 'transform' : 'none';
        if (direction === 'horizontal') {
          const x = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapWidth;
          el.style.transform = `translate3d(${x}px, 0, 0)`;
          $this.x = x;
        } else {
          const y = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapHeight;
          el.style.transform = `translate3d(0, ${y}px, 0)`;
          $this.y = y;
        }

        setPageIndex(newPageIndex);
      }
    },
    [thisRef]
  );

  useImperativeHandle(ref, () => ({
    prev: () => {
      slideToPageIndex(Math.max(thisRef.current.min, pageIndex - 1));
    },
    next: () => {
      slideToPageIndex(Math.min(thisRef.current.max, pageIndex + 1));
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

  useMount(() => {
    const $this = thisRef.current;
    const container = containerRef.current;

    $this.wrapWidth = container.offsetWidth;
    $this.wrapHeight = container.offsetHeight;

    slideToPageIndex(0, false);
  });

  useEffect(() => {
    if (autoPlay && len > 1) {
      thisRef.current.timer = window.setInterval(
        (p) => {
          if (!thisRef.current.isMoving) {
            slideToPageIndex(p + 1);
          }
        },
        interval,
        pageIndex
      );

      return () => {
        window.clearInterval(thisRef.current.timer);
      };
    }
  }, [slideToPageIndex, autoPlay, interval, len, pageIndex]);

  const pagerRender = (): React.ReactNode => {
    if (!showPageIndicator || len <= 1) return null;

    return (
      <div className={clsx('pager', { vertical: direction === 'vertical' })}>
        <Space size={6} direction={direction}>
          {React.Children.map(children, (c, idx) => (
            <span
              key={idx}
              className={clsx('item', { active: pageIndex === idx })}
              onClick={() => slideToPageIndex(idx)}
            ></span>
          ))}
        </Space>
      </div>
    );
  };

  useLayoutEffect(() => {
    const wrapEl = wrapElRef.current;
    const fg = new Touch(wrapEl, {
      onTouchStart: (e) => {
        e.preventDefault();
        const $this = thisRef.current;
        $this.isMoving = true;
        wrapEl.style.transitionProperty = 'none';
        $this.lastX = $this.x;
        $this.lastY = $this.y;
      },
      onTouchEnd: () => {
        const $this = thisRef.current;
        if (!$this.isMoving) {
          return;
        }
        $this.isMoving = false;
        const { ratio, pageIndex, max, len } = $this;

        if ($this.exp && ($this.max === $this.pageIndex || $this.min === $this.pageIndex)) {
          slideToPageIndex($this.pageIndex === max ? 0 : len - 1, false);
          return;
        }

        if (
          direction === 'horizontal' &&
          Math.abs($this.x - $this.lastX) > $this.wrapWidth * ratio
        ) {
          slideToPageIndex(pageIndex + ($this.x < $this.lastX ? 1 : -1));
        } else if (
          direction === 'vertical' &&
          Math.abs($this.y - $this.lastY) > $this.wrapHeight * ratio
        ) {
          slideToPageIndex(pageIndex + ($this.y < $this.lastY ? 1 : -1));
        } else {
          // reset
          slideToPageIndex(pageIndex);
        }
      },
      onPressMove: (e) => {
        const $this = thisRef.current;

        if ($this.exp && ($this.max === $this.pageIndex || $this.min === $this.pageIndex)) {
          return;
        }

        if (direction === 'horizontal') {
          if ($this.x > 0 || $this.x < -1 * (count - 1) * $this.wrapWidth) {
            return;
          }
          $this.x += e.deltaX;
          wrapElRef.current.style.transform = `translate3d(${$this.x}px, 0, 0)`;
        } else {
          if ($this.y > 0 || $this.y < -1 * (count - 1) * $this.wrapHeight) {
            return;
          }
          $this.y += e.deltaY;
          wrapElRef.current.style.transform = `translate3d(0, ${$this.y}px, 0)`;
        }
      },
    });
    return () => fg.destroy();
  }, [count, direction, thisRef, slideToPageIndex]);

  return (
    <StyledSlide
      ref={containerRef}
      {...rest}
      className={clsx('uc-slide', className)}
      style={{ ...style, height }}
    >
      <div
        ref={wrapElRef}
        className={clsx('wrap', { vertical: direction === 'vertical' })}
        onTransitionEnd={() => {
          ensurePageIndex();
        }}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {items}
      </div>

      {pagerRender()}
    </StyledSlide>
  );
});

Slide.displayName = 'UC-Slide';

export default Slide;
