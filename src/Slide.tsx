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
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';
import clsx from 'clsx';

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .wrap {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    transition: transform 0.3s ease-in-out;
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
  /** 自动播放 */
  autoPlay?: boolean;
  /** 初始显示第几页 */
  defaultPageIndex?: number;
  // /** 水平还是垂直播放 */
  direction?: 'horizontal' | 'vertical';
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
  /** 滑动比例多少切换，默认0.25 */
  ratio?: number;
};

interface RefType {
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

  const newItems = React.Children.map(items, (c, index) =>
    React.cloneElement(c, {
      key: index,
      className: clsx('uc-slide-page', c.props?.className),
      style: { ...c.props?.style, height },
    })
  );

  return newItems;
};

/**  轮播 */
const Slide = React.forwardRef<RefType, Props>((props, ref) => {
  const {
    autoPlay = true,
    loop = true,
    defaultPageIndex = 0,
    onPageChange,
    direction = 'horizontal',
    interval = 3000,
    children,
    className,
    height = 160,
    style,
    showDot = true,
    ratio = 0.25,
    ...rest
  } = props;

  const containerRef = useRef<HTMLDivElement>();

  const wrapElRef = useRef<HTMLDivElement>();

  const [items, setItems] = useState(() => getItems(children, loop, height));

  const count = items.length;
  const len = React.Children.count(children);

  const sRef = useRef({
    x: 0,
    lastX: 0,
    y: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    inTransition: false,
  });
  const [pageIndex, setPageIndex] = useState(defaultPageIndex); // !loop:0~len-1, loop: -1~len

  const slideToPageLoc = useCallback(
    (newPageIndex: number, transition = true) => {
      const s = sRef.current;

      wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';
      if (direction === 'horizontal') {
        const x = (newPageIndex + (loop ? 1 : 0)) * -1 * s.wrapWidth;
        wrapElRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        s.x = x;
      } else {
        const y = (newPageIndex + (loop ? 1 : 0)) * -1 * s.wrapHeight;
        wrapElRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
        s.y = y;
      }
      s.inTransition = transition;

      setPageIndex(newPageIndex);
    },
    [sRef, loop, direction]
  );

  const exp = count > len;

  useImperativeHandle(ref, () => ({
    prev: () => slideToPageLoc(pageIndex > (exp ? -1 : 0) ? pageIndex - 1 : exp ? -1 : 0),
    next: () =>
      slideToPageLoc(pageIndex < (exp ? len : len - 1) ? pageIndex + 1 : exp ? len : len - 1),
  }));

  useUpdateEffect(() => {
    setItems(getItems(children, loop, height));
    slideToPageLoc(0, false);
  }, [children, loop, height, slideToPageLoc]);

  useUpdateEffect(() => {
    if (pageIndex === len) {
      onPageChange?.(0);
    } else if (pageIndex === -1) {
      onPageChange?.(len - 1);
    } else {
      onPageChange?.(pageIndex);
    }
  }, [pageIndex, len]);

  useLayoutEffect(() => {
    const s = sRef.current;
    const container = containerRef.current;
    s.wrapWidth = container.offsetWidth;
    s.wrapHeight = container.offsetHeight;

    slideToPageLoc(0, false);
  }, [slideToPageLoc]);

  useEffect(() => {
    // auto play
    if (autoPlay) {
      const timer = window.setTimeout(() => {
        slideToPageLoc(pageIndex + 1);
      }, interval);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [pageIndex, slideToPageLoc, autoPlay, interval]);

  const dotRender = (): React.ReactNode => {
    if (!showDot) return null;

    return (
      <div className={clsx('uc-slide-dot-wrapper', { vertical: direction === 'vertical' })}>
        {React.Children.map(children, (c, idx) => (
          <span
            key={idx}
            className={clsx('dot', { active: pageIndex === idx })}
            onClick={() => slideToPageLoc(idx)}
          ></span>
        ))}
      </div>
    );
  };

  return (
    <StyledSlide
      ref={containerRef}
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
          s.lastY = s.y;
        }}
        onTouchEnd={() => {
          const s = sRef.current;

          if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
            slideToPageLoc(pageIndex + (s.x < s.lastX ? 1 : -1));
          } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
            slideToPageLoc(pageIndex + (s.y < s.lastY ? 1 : -1));
          } else {
            // reset
            slideToPageLoc(pageIndex);
          }
        }}
        onPressMove={(e) => {
          const s = sRef.current;
          if (s.inTransition) {
            return setTimeout(() => {
              s.inTransition = false;
            }, 300);
          }
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
            sRef.current.inTransition = false;
            // loop
            if (pageIndex === len) {
              slideToPageLoc(0, false);
            } else if (pageIndex === -1) {
              slideToPageLoc(len - 1, false);
            }
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
