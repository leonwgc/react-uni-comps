import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useImperativeHandle,
  useEffect,
} from 'react';
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
  /** 水平还是垂直播放 */
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
};

interface RefType {
  goToPage: (pageIndex: number) => void;
  prev: () => void;
  next: () => void;
}

/**  轮播焦点图/全屏分页 */
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
    ...rest
  } = props;

  const wrapElRef = useRef<HTMLDivElement>();

  const thisRef = useThisRef({
    autoPlay,
    loop,
    onPageChange,
    interval,
    children,
  });

  const nRef = useRef({
    x: 0,
    lastX: 0,
    wrapWidth: 0,
    count: 0,
    timer: 0,
  });
  const [pageIndex, setPageIndex] = useState(defaultPageIndex);

  useLayoutEffect(() => {
    const v = thisRef.current;
    const s = nRef.current;
    const wrapEl = wrapElRef.current;
    s.wrapWidth = wrapEl.offsetWidth;

    let count = 0;
    React.Children.map(v.children, (c) => {
      if (React.isValidElement(c)) {
        count++;
      }
    });
    s.count = count;
  }, [thisRef]);

  const startTransform = useCallback(
    (newPageIndex: number, effect = true) => {
      const s = nRef.current;
      wrapElRef.current.style.transitionProperty = effect ? 'transform' : 'none';
      window.clearTimeout(s.timer);
      setTimeout(() => {
        wrapElRef.current.style.transform = `translate3d(-${newPageIndex * s.wrapWidth}px, 0, 0)`;
        s.x = -newPageIndex * s.wrapWidth;
      });
    },
    [nRef]
  );

  useEffect(() => {
    startTransform(pageIndex);
    thisRef.current.onPageChange?.(pageIndex);
  }, [pageIndex, startTransform, thisRef]);

  useEffect(() => {
    const v = thisRef.current;
    const s = nRef.current;
    if (v.autoPlay) {
      if (pageIndex === s.count - 1) {
        s.timer = window.setTimeout(() => {
          wrapElRef.current.style.transitionProperty = 'none';
          wrapElRef.current.style.transform = 'none';
          setPageIndex(0);
        }, v.interval);
      } else {
        s.timer = window.setTimeout(() => {
          setPageIndex(pageIndex < s.count - 1 ? pageIndex + 1 : 0);
        }, v.interval);
      }
    }
  }, [thisRef, nRef, pageIndex, startTransform]);

  const dotRender = (): React.ReactNode => {
    if (!showDot) return null;

    return (
      <div className={clsx('uc-slide-dot-wrapper', { vertial: direction === 'vertical' })}>
        {React.Children.map(children, (c: React.ReactElement, idx) => (
          <span key={idx} className={clsx('dot', { active: pageIndex === idx })}></span>
        ))}
      </div>
    );
  };

  return (
    <StyledSlide {...rest} className={clsx('uc-slide', className)} style={{ ...style, height }}>
      <FingerGestureElement
        ref={wrapElRef}
        onTouchStart={() => {
          const s = nRef.current;
          wrapElRef.current.style.transitionProperty = 'none';
          s.lastX = s.x;
        }}
        onSwipe={(e) => {
          const s = nRef.current;

          if (Math.abs(s.x - s.lastX) > s.wrapWidth / 2) {
            if (e.direction === 'left') {
              pageIndex < s.count - 1 && setPageIndex(pageIndex + 1);
            } else {
              pageIndex > 0 && setPageIndex(pageIndex - 1);
            }
          } else {
            // back
            startTransform(pageIndex);
          }
        }}
        onPressMove={(e) => {
          e.preventDefault();
          const s = nRef.current;
          if (s.x > 0) return;
          if (s.x < -1 * (s.count - 1) * s.wrapWidth) return;
          s.x += e.deltaX;
          wrapElRef.current.style.transform = `translate3d(${s.x}px, 0, 0)`;
        }}
      >
        <div className={clsx('wrap')}>
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
