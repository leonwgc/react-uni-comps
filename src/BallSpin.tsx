import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import { nanoid } from 'nanoid';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 动画持续时间 (单位: ms)
   * @default 600
   */
  duration?: number;
  /**
   * 显示中心圆圈
   */
  showCircle?: boolean;
};

const rotate = keyframes`
 0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360);
    }
`;

const circle = keyframes`
 0% {
    stroke-dasharray: 1, 314; // 2piR
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 60, 314;
    stroke-dashoffset: -97;
  }

  100% {
    stroke-dasharray: 0, 314;
    stroke-dashoffset: -157;
  }
`;

const StyledLoader = styled.div<{ $duration: number }>`
  display: inline-flex;
  vertical-align: middle;
  svg {
    animation: ${rotate} ${({ $duration }) => $duration}ms linear infinite;
    animation-fill-mode: backwards;
  }

  .my-circle {
    animation: ${circle} ${({ $duration }) => $duration}ms linear infinite;
  }
`;

const SVGProps = {
  width: '1.25em',
  height: '1.25em',
  strokeWidth: 8,
  fill: 'none',
};

/** 转圈圈spin */
const BallSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, duration = 600, showCircle, ...rest } = props;
  const elRef = React.useRef();

  const idRef = React.useRef<string>(nanoid());

  React.useImperativeHandle(ref, () => elRef.current);

  return (
    <StyledLoader
      ref={elRef}
      $duration={duration}
      {...rest}
      className={clsx(className, 'uc-ball-spin')}
    >
      <svg viewBox="0 0 120 120" {...SVGProps}>
        <defs>
          <linearGradient id={idRef.current} x1="100%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopOpacity: 1, stopColor: 'currentColor' }} />
            <stop offset="50%" style={{ stopOpacity: 0.9, stopColor: 'currentColor' }} />
            <stop offset="100%" style={{ stopOpacity: 0.1, stopColor: 'currentColor' }} />
          </linearGradient>
        </defs>
        <circle
          className="my-circle"
          r="50"
          cx="60"
          cy="60"
          stroke={`url(#${idRef.current})`}
          strokeLinecap="round"
          transform="rotate(-180,60,60)"
        />
        <circle
          className="my-circle"
          r="50"
          cx="60"
          cy="60"
          stroke={`url(#${idRef.current})`}
          strokeLinecap="round"
          transform="rotate(0,60,60)"
        />
        {showCircle && <circle r="14" cx="60" cy="60" stroke="currentColor" />}
      </svg>
    </StyledLoader>
  );
});

BallSpin.displayName = 'UC-BallSpin';

export default BallSpin;
