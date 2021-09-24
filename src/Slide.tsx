import React, { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import clsx from 'clsx';
import useThisRef from './hooks/useThisRef';

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .wrap {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    transition: transform 0.3s ease-in-out;
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

    &.vertial {
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
  /** 自动播放 */
  autoPlay?: boolean;
  /** 初始显示第几页 */
  defaultPageIndex?: number;
  // /** 水平还是垂直播放 */
  // direction?: 'horizontal' | 'vertical';
  /** 距离下一次播放的间隔毫秒, 默认 3000 */
  interval?: number;
  children: React.ReactElement[];
  /** 容器高度，默认160px */
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  /** 循环播放 */
  loop?: boolean;
  /** 页面切换后回调 */
  onPageChange?: (pageIndex: number) => void;
  /** 是否显示分页圆点 */
  showDot?: boolean;
};

interface RefType {
  goToPage: (pageIndex: number) => void;
  prev: () => void;
  next: () => void;
}

const getChildrenElementCount = (children) => {
  let count = 0;
  React.Children.map(children, (c) => {
    if (React.isValidElement(c)) {
      count++;
    }
  });
  return count;
};

// Todo: vertical support

/**  轮播焦点图/全屏分页 */
const Slide = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    autoPlay = true,
    loop = true,
    defaultPageIndex = 0,
    onPageChange,
    // direction = 'horizontal',
    interval = 3000,
    children,
    className,
    height = 160,
    style,
    showDot = true,
    ...rest
  } = props;

  const wrapElRef = useRef<HTMLDivElement>();

  const [count, setCount] = useState(() => {
    return getChildrenElementCount(children);
  });

  useEffect(() => {
    setCount(getChildrenElementCount(children));
  }, [children]);

  const thisRef = useThisRef({
    onPageChange,
  });

  const sRef = useRef({
    x: 0,
    lastX: 0,
    wrapWidth: 0,
    timer: 0,
    lastPageIndex: -1,
  });
  const [pageIndex, setPageIndex] = useState(defaultPageIndex);

  useLayoutEffect(() => {
    const s = sRef.current;
    const wrapEl = wrapElRef.current;
    s.wrapWidth = wrapEl.offsetWidth;
  }, [thisRef]);

  const gotoPage = useCallback(
    (newPageIndex: number, transition = true) => {
      const s = sRef.current;

      window.clearTimeout(s.timer);
      if (newPageIndex >= 0 && newPageIndex < count) {
        setPageIndex(newPageIndex);
        thisRef.current.onPageChange?.(newPageIndex);
      }
      if (newPageIndex == count) {
        setPageIndex(0);
        thisRef.current.onPageChange?.(0);
      }

      wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';
      s.timer = window.setTimeout(() => {
        wrapElRef.current.style.transform = `translate3d(-${newPageIndex * s.wrapWidth}px, 0, 0)`;
        s.x = -newPageIndex * s.wrapWidth;
        s.lastPageIndex = newPageIndex;
      });
    },
    [sRef, count, thisRef]
  );

  useEffect(() => {
    const s = sRef.current;
    if (autoPlay) {
      if (pageIndex === count - 1) {
        if (loop) {
          const wrap = wrapElRef.current;
          const firstEl = wrap.children[0] as HTMLElement;
          firstEl.style.transform = `translateX(${s.wrapWidth * count}px)`;
          s.timer = window.setTimeout(() => {
            gotoPage(count);
          }, interval);
        }
      } else {
        s.timer = window.setTimeout(() => {
          gotoPage(pageIndex < count - 1 ? pageIndex + 1 : 0);
        }, interval);
      }
    }
  }, [thisRef, sRef, pageIndex, gotoPage, count, loop, autoPlay, interval]);

  const dotRender = (): React.ReactNode => {
    if (!showDot) return null;

    return (
      <div className={clsx('uc-slide-dot-wrapper', { vertial: false })}>
        {React.Children.map(children, (c: React.ReactElement, idx) => (
          <span key={idx} className={clsx('dot', { active: pageIndex === idx })}></span>
        ))}
      </div>
    );
  };

  return (
    <StyledSlide
      ref={ref}
      {...rest}
      className={clsx('uc-slide', className)}
      style={{ ...style, height }}
    >
      <FingerGestureElement
        ref={wrapElRef}
        onTouchStart={() => {
          const s = sRef.current;
          wrapElRef.current.style.transitionProperty = 'none';
          s.lastX = s.x;
        }}
        onSwipe={(e) => {
          const s = sRef.current;

          if (Math.abs(s.x - s.lastX) > s.wrapWidth / 2) {
            if (e.direction === 'left') {
              if (pageIndex === count - 1) {
                return gotoPage(count);
              } else {
                pageIndex < count - 1 && gotoPage(pageIndex + 1);
              }
            } else {
              pageIndex > 0 && gotoPage(pageIndex - 1);
            }
          } else {
            // back
            gotoPage(pageIndex);
          }
        }}
        onPressMove={(e) => {
          e.preventDefault();

          const s = sRef.current;
          if (loop && s.lastPageIndex === count) {
            // last trick frame
            return;
          }
          if (s.x > 0) return;
          if (s.x < -1 * (loop ? count : count - 1) * s.wrapWidth) return;
          s.x += e.deltaX;
          wrapElRef.current.style.transform = `translate3d(${s.x}px, 0, 0)`;
        }}
      >
        <div
          className={clsx('wrap')}
          onTransitionEnd={() => {
            // last & loop
            const wrap = wrapElRef.current;
            const firstEl = wrap.children[0] as HTMLElement;
            if (pageIndex == count - 1 && loop) {
              firstEl.style.transform = `translateX(${sRef.current.wrapWidth * count}px)`;
            } else {
              firstEl.style.transform = 'none';
            }

            if (sRef.current.lastPageIndex === count) {
              // reset
              // gotoPage(0, false);
              wrapElRef.current.style.transitionProperty = 'none';
              wrapElRef.current.style.transform = `translate3d(0, 0, 0)`;
              firstEl.style.transform = 'none';
            }
          }}
        >
          {React.Children.map(
            children,
            (c, idx) =>
              React.isValidElement(c) &&
              React.cloneElement(c, {
                key: idx,
                className: clsx(c.props?.className, 'uc-slide-page'),
                style: { ...c.props?.style, height },
              })
          )}
        </div>
      </FingerGestureElement>
      {dotRender()}
    </StyledSlide>
  );
});

Slide.displayName = 'UC-Slide';

export default Slide;
