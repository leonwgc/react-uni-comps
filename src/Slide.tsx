import React, { useEffect, useState, useRef } from 'react';
import BScroll from '@better-scroll/core';
import SlidePlugin from '@better-scroll/slide';
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
};

/**  Slide */
const Slide = (props: Props): React.ReactElement => {
  const {
    autoplay = true,
    defaultPageIndex = 0,
    direction = 'horizontal',
    interval = 3000,
    children,
    dotRender,
    className,
    height = 160,
    style,
    ...rest
  } = props;
  const ref = useRef();
  const slideRef = useRef<BScroll>();
  const [pageIndex, setPageIndex] = useState(defaultPageIndex);

  useEffect(() => {
    BScroll.use(SlidePlugin);

    const scrollX = direction === 'horizontal';
    const scrollY = !scrollX;

    const slide = {
      autoplay: autoplay,
      loop: true,
      threshold: 0.1,
      speed: 300,
      listenFlick: false,
      interval,
    };

    if (scrollX) {
      slide.startPageXIndex = pageIndex;
    } else {
      slide.startPageYIndex = pageIndex;
    }

    slideRef.current = new BScroll(ref.current, {
      scrollX,
      scrollY,
      slide,
      momentum: false,
      bounce: false,
      probeType: 3,
    });

    slideRef.current.on('slideWillChange', (page) => {
      setPageIndex(page[`page${scrollX ? 'X' : 'Y'}`]);
    });
  }, []);

  return (
    <StyledSlide
      className={clsx('uc-slide', className)}
      style={{ ...style, height }}
      ref={ref}
      {...rest}
    >
      <div>
        {React.Children.map(children, (c, idx) =>
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
};

export default Slide;
