import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import type { StringOrNumber } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 动画持续时间 (单位: ms)
   * @default 1000
   */
  duration?: number;
  /**
   * 尺寸
   * @default 32
   */
  size?: StringOrNumber;
  /**
   * 颜色
   * @default currentColor
   */
  color?: string;
  /**
   * 轨道颜色
   * @default #d9d9d9
   */
  trackColor?: string;
  /**
   * 轨道宽度 <= 8
   * @default 8
   */
  strokeWidth?: number;
};

const move = keyframes`
 0% {
    stroke-dasharray: 85, 254; 
    stroke-dashoffset: 0;
  }
 
  100% {
    stroke-dasharray: 85, 254; 
    stroke-dashoffset: -339;
  }
`;

const StyledLoader = styled.div<{ $duration: number }>`
  display: inline-flex;
  vertical-align: middle;

  .my-circle {
    animation: ${move} ${({ $duration }) => $duration}ms linear infinite;
  }
`;

/** 圆圈spin */
const CircleSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    duration = 1000,
    trackColor = '#d9d9d9',
    color = 'currentColor',
    size = 32,
    strokeWidth = 8,
    ...rest
  } = props;
  const elRef = React.useRef();

  React.useImperativeHandle(ref, () => elRef.current);

  return (
    <StyledLoader
      ref={elRef}
      $duration={duration}
      {...rest}
      className={clsx(className, 'uc-circle-spin')}
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        fill="none"
        strokeWidth={Math.min(strokeWidth, 8)}
      >
        <circle r="54" cx="60" cy="60" stroke={trackColor} />
        <circle
          className="my-circle"
          r="54"
          cx="60"
          cy="60"
          stroke={color}
          strokeLinecap="round"
          transform="rotate(-90,60,60)"
        />
      </svg>
    </StyledLoader>
  );
});

CircleSpin.displayName = 'UC-CircleSpin';

export default CircleSpin;
