import React, { useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import { getThemeColorCss } from './themeHelper';
import useEventListener from './hooks/useEventListener';
import useMount from './hooks/useMount';
import useThrottle from './hooks/useThrottle';
import { animationFast } from './vars';
import useLatest from './hooks/useLatest';

const getClassName = prefixClassName('uc-scroll-box');

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 是否显示指示器
   */
  showIndicator?: boolean;
  /**
   * 指示器样式
   */
  indicatorStyle?: React.CSSProperties;
  /**
   * 指示器样式类
   */
  indicatorClass?: string;

  /**
   * 指示器颜色
   * @default 默认主题色
   * @default
   */
  fillColor?: string;
};

//#region  style

const StyledWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  .${getClassName('body')} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    height: 100%;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }

    * {
      flex: none;
    }
  }

  .${getClassName('track')} {
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    height: 4px;
    width: 30px;
    background-color: #f0f0f0;
    visibility: hidden;
  }

  .${getClassName('fill')} {
    position: absolute;
    left: 0;
    width: 0;
    border-radius: inherit;
    height: 100%;
    ${getThemeColorCss('background-color')}
    transition: left ${animationFast}ms ease;
  }
`;
//#endregion

/** 带指示器的水平滚动盒子 */
const ScrollBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, showIndicator, indicatorStyle, indicatorClass, fillColor, children, ...rest } =
    props;

  const bodyRef = useRef<HTMLDivElement>();
  const fillRef = useRef<HTMLDivElement>();
  const showIndicatorRef = useLatest(showIndicator);

  const onScroll = useThrottle(() => {
    if (!showIndicatorRef.current) {
      return;
    }
    const body = bodyRef.current;
    const fill = fillRef.current;
    const track = fill.parentNode as HTMLElement;
    const trackWidth = track.offsetWidth;

    if (body.scrollWidth > body.offsetWidth) {
      track.style.display = '';
      track.style.visibility = 'unset';
      const distance = body.scrollWidth - body.offsetWidth;
      fill.style.width = Math.floor((body.offsetWidth * trackWidth) / body.scrollWidth) + 'px';

      if (body.scrollLeft >= 0) {
        fill.style.left = (body.scrollLeft * (trackWidth - fill.offsetWidth)) / distance + 'px';
      }
    } else {
      track.style.display = 'none';
    }
  }, 16);

  useMount(onScroll);
  useEventListener(bodyRef, 'scroll', onScroll);
  useEventListener(() => window, 'resize', onScroll);

  return (
    <StyledWrap {...rest} ref={ref} className={clsx(getClassName(), className)}>
      <div className={getClassName('body')} ref={bodyRef}>
        {children}
      </div>
      {showIndicator && (
        <div className={clsx(getClassName('track'), indicatorClass)} style={indicatorStyle}>
          <div
            className={getClassName('fill')}
            style={{ backgroundColor: fillColor }}
            ref={fillRef}
          ></div>
        </div>
      )}
    </StyledWrap>
  );
});

ScrollBox.displayName = 'UC-ScrollBox';

export default ScrollBox;
