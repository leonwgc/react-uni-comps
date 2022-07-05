import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
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
   * ball size
   * @default 3
   */
  size?: number;
  /**
   * ball gap
   * @default 4
   */

  gap?: number;
  /**
   * ball color
   * @default #D9D9D9
   */
  color?: string;
  /**
   * animation duration, ms
   * @default 600
   */
  duration?: number;
  /**
   * animation iteration count
   * @default 1
   */
  iterationCount?: StringOrNumber;
};

const StyledLoader = styled.div<{ $gap?: number; $duration; $iterationCount }>`
  display: inline-flex;
  vertical-align: middle;

  @keyframes ${getClassName('ball')} {
    25% {
      transform: translateY(-1.1em);
    }

    50% {
      transform: translateY(0px);
    }

    75% {
      transform: translateY(1.1em);
    }

    100% {
      transform: translateY(0px);
    }
  }

  .${getClassName('item')} {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    animation: ${({ $duration }) => $duration}ms linear ${({ $duration }) => $duration * 0.2}ms
      ${({ $iterationCount }) => $iterationCount} normal both running ${getClassName('ball')};

    &:nth-child(2) {
      animation-delay: ${({ $duration }) => $duration * 0.4}ms;
    }

    &:nth-child(3) {
      animation-delay: ${({ $duration }) => $duration * 0.6}ms;
    }

    &:not(:first-child) {
      margin-left: ${({ $gap }) => normalizePx($gap)};
    }
  }
`;

/** 加载指示器,三个跳动的小球 */
const DotSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    style,
    size = 3,
    gap = 4,
    duration = 600,
    iterationCount = 1,
    color = '#d9d9d9',
    ...rest
  } = props;
  return (
    <StyledLoader
      {...rest}
      ref={ref}
      $gap={gap}
      $duration={duration}
      $iterationCount={iterationCount}
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
