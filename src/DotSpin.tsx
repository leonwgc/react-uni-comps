import React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { prefixClassName } from './helper';
import type { StringOrNumber } from './types';

const getClassName = prefixClassName('uc-dot-spin');

const normalizePx = (n: StringOrNumber) => {
  if (typeof n === 'number') {
    return n + 'px';
  } else {
    return n;
  }
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 小球宽高
   * @default 3
   */
  size?: StringOrNumber;
  /**
   * 小球间距
   * @default 4
   */

  gap?: StringOrNumber;
  /**
   * 小球颜色
   * @default #D9D9D9
   */
  color?: string;
  /**
   * 动画次数
   * @default 1
   */
  iteration?: number;
};

const dance = keyframes`
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-1em);
    }

    50% {
      transform: translateY(0);
    }

    75% {
      transform: translateY(1em);
    }

    100% {
      transform: translateY(0);
    }
`;

const StyledLoader = styled.div<{ $gap?: StringOrNumber; $iteration }>`
  display: inline-flex;
  vertical-align: middle;

  .${getClassName('item')} {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    animation: 600ms linear 200ms ${({ $iteration }) => $iteration} normal both running ${dance};

    &:nth-child(2) {
      animation-delay: 360ms;
    }

    &:nth-child(3) {
      animation-delay: 520ms;
    }

    &:not(:first-child) {
      margin-left: ${({ $gap }) => normalizePx($gap)};
    }
  }
`;

/** 加载指示器,三个跳动的小球 */
const DotSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, style, size = 3, gap = 4, iteration = 1, color = '#d9d9d9', ...rest } = props;
  return (
    <StyledLoader
      {...rest}
      ref={ref}
      $gap={gap}
      $iteration={iteration}
      className={clsx(className, getClassName())}
      style={{ fontSize: size, ...style }}
    >
      {[1, 2, 3].map((item) => (
        <div key={item} className={getClassName('item')} style={{ background: color }} />
      ))}
    </StyledLoader>
  );
});

DotSpin.displayName = 'UC-DotSpin';

export default DotSpin;
