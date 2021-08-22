import React, { useEffect, useState, useRef, useMemo } from 'react';
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
`;

export type Props = {
  autoplay?: boolean;
  defaultPageIndex?: number;
  direction?: 'horizontal' | 'vertical';
  /** 距离下一次播放的间隔毫秒, 默认 3000 */
  interval?: number;
  children?: React.ReactElement;
  dotRender?: (pageIndex) => React.ReactNode;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  onPageChange?: (pageIndex: number) => void;
};

/**  Slide */
const Slide = React.forwardRef<
  {
    goToPage: (pageIndex: number) => void;
    prev: () => void;
    next: () => void;
    bs: BScroll;
  },
  Props
>((props, ref) => {
  const {
    autoplay = true,
    loop = true,
    defaultPageIndex = 0,
    onPageChange,
    direction = 'horizontal',
    interval = 3000,
    children,
    dotRender,
    className,
    height = 160,
    style,
    ...rest
  } = props;
  const containerRef = useRef();
  const bsRef = useRef<BScroll>();
  const onPageChangeRef = useRef(onPageChange);
  const [pageIndex, setPageIndex] = useState(defaultPageIndex);

  const slide = useMemo(() => {
    const scrollX = direction === 'horizontal';

    const options: SlideConfig = {
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

    if (ref) {
      ref.current = {
        goToPage: (pageIndex) => {
          if (scrollX) {
            bsRef.current.goToPage(pageIndex, 0);
          } else {
            bsRef.current.goToPage(0, pageIndex);
          }
        },
        prev: () => bsRef.current.prev(),
        next: () => bsRef.current.next(),
        bs: bsRef.current,
      };
    }

    return () => bsRef.current.destroy();
  }, [slide, direction, setPageIndex, ref]);

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
      {dotRender ? dotRender(pageIndex) : null}
    </StyledSlide>
  );
});

Slide.displayName = 'uc-slide';

export default Slide;
