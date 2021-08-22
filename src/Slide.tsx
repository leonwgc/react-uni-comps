import React, { useEffect, useState, useRef, useMemo, useImperativeHandle } from 'react';
import BScroll from '@better-scroll/core';
import SlidePlugin, { SlideConfig } from '@better-scroll/slide';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledSlide = styled.div`
  overflow: hidden;
  position: relative;

  .uc-slide-page {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    width: 100%;
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
  autoplay?: boolean;
  /** 初始显示第几页 */
  defaultPageIndex?: number;
  /** 水平还是垂直播放 */
  direction?: 'horizontal' | 'vertical';
  /** 距离下一次播放的间隔毫秒, 默认 3000 */
  interval?: number;
  children?: React.ReactElement;
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
  bs: BScroll;
}

/**  Slide */
const Slide = React.forwardRef<RefType, Props>((props, ref) => {
  const {
    autoplay = true,
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
  const containerRef = useRef();
  const bsRef = useRef<BScroll>();
  const onPageChangeRef = useRef(onPageChange);
  const [pageIndex, setPageIndex] = useState(defaultPageIndex);

  const slide = useMemo(() => {
    const scrollX = direction === 'horizontal';

    const options: Partial<SlideConfig> = {
      autoplay,
      loop,
      threshold: 0.1,
      speed: 300,
      listenFlick: true,
      interval,
    };
    if (scrollX) {
      options.startPageXIndex = defaultPageIndex;
    } else {
      options.startPageYIndex = defaultPageIndex;
    }

    return options;
  }, [autoplay, interval, loop, direction, defaultPageIndex]);

  useEffect(() => {
    BScroll.use(SlidePlugin);

    const scrollX = direction === 'horizontal';
    const scrollY = !scrollX;

    bsRef.current = new BScroll(containerRef.current, {
      click: true,
      scrollX,
      scrollY,
      slide,
      momentum: false,
      bounce: false,
      probeType: 3,
    });

    bsRef.current.on('slideWillChange', (page) => {
      setPageIndex(page[`page${scrollX ? 'X' : 'Y'}`]);
    });

    bsRef.current.on('slidePageChanged', (page) => {
      if (typeof onPageChangeRef.current === 'function') {
        onPageChangeRef.current(page[`page${scrollX ? 'X' : 'Y'}`]);
      }
    });

    return () => {
      bsRef.current.destroy();
    };
  }, [slide, direction, setPageIndex]);

  useImperativeHandle(ref, () => ({
    goToPage: (pageIndex) => {
      if (direction === 'horizontal') {
        bsRef.current.goToPage(pageIndex, 0);
      } else {
        bsRef.current.goToPage(0, pageIndex);
      }
    },
    prev: () => bsRef.current.prev(),
    next: () => bsRef.current.next(),
    bs: bsRef.current,
  }));

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
    <StyledSlide
      className={clsx('uc-slide', className)}
      style={{ ...style, height }}
      ref={containerRef}
      {...rest}
    >
      <div>
        {React.Children.map(children, (c: React.ReactElement, idx) =>
          React.cloneElement(c, {
            key: idx,
            className: clsx(c.props.className, 'uc-slide-page'),
            style: { ...c.props.style, height },
          })
        )}
      </div>
      {dotRender()}
    </StyledSlide>
  );
});

Slide.displayName = 'uc-slide';

export default Slide;
