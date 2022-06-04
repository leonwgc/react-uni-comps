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
   * @default true
   */
  showIndicator?: boolean;
  /**
   * 指示器样式
   */
  indicatorStyle?: React.CSSProperties;

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
    width: 40px;
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
  const { className, showIndicator = true, indicatorStyle, fillColor, children, ...rest } = props;

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
      track.style.visibility = 'unset';
      const distance = body.scrollWidth - body.offsetWidth;
      if (fill.offsetWidth === 0) {
        fill.style.width = Math.floor((body.offsetWidth * trackWidth) / body.scrollWidth) + 'px';
      }

      if (body.scrollLeft >= 0) {
        fill.style.left = (body.scrollLeft * (trackWidth - fill.offsetWidth)) / distance + 'px';
      }
    }
  }, 16);

  useMount(onScroll);
  useEventListener(bodyRef, 'scroll', onScroll);

  return (
    <StyledWrap {...rest} ref={ref} className={clsx(getClassName(), className)}>
      <div className={getClassName('body')} ref={bodyRef}>
        {children}
      </div>
      {showIndicator && (
        <div className={getClassName('track')} style={indicatorStyle}>
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
