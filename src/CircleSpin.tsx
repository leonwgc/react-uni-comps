import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import type { StringOrNumber } from './types';
import { prefixClassName } from './helper';

const getClassName = prefixClassName('uc-circle-spin');

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
  /**
   * 上层半圆百分比
   * @default 25
   */
  percent?: number;
};

const ani = (props: { $percent: number }) => keyframes`
0% {
     stroke-dasharray: ${(props.$percent * 339) / 100},
       ${339 - (props.$percent * 339) / 100};
     stroke-dashoffset: 0;
   }

   100% {
    stroke-dasharray: ${(props.$percent * 339) / 100},
       ${339 - (props.$percent * 339) / 100};
     stroke-dashoffset: -339;
   }
`;

const StyledLoader = styled.div<{ $duration: number; $percent: number }>`
  display: inline-flex;
  vertical-align: middle;

  .${getClassName('circle')} {
    animation: ${(props) => ani(props)} ${({ $duration }) => $duration}ms linear infinite;
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
    percent = 25,
    ...rest
  } = props;
  const elRef = React.useRef();

  React.useImperativeHandle(ref, () => elRef.current);

  if (typeof percent !== 'number' || percent <= 0 || percent >= 100) {
    throw new Error('percent 必须是0-100之间的数字');
  }

  return (
    <StyledLoader
      ref={elRef}
      $duration={duration}
      $percent={percent}
      {...rest}
      className={clsx(className, getClassName())}
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
          className={getClassName('circle')}
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
