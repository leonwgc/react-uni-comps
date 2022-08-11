import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import { StringOrNumber } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 颜色
   * @default currentColor
   */
  color?: string;
  /**
   * 轨道宽度
   * @default 3
   */
  strokeWidth?: number;
  /**
   * 大小
   * @default 30
   */
  size?: StringOrNumber;
};

const circle = keyframes`
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0
    }

    50% {
        stroke-dasharray: 90,150;
        stroke-dashoffset: -40
    }

    to {
        stroke-dasharray: 90,150;
        stroke-dashoffset: -120
    }
`;

const rotate = keyframes`
   0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
`;

const SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'none',
};

const StyledLoader = styled.div`
  display: inline-flex;
  vertical-align: middle;
  animation: ${rotate} 2s linear infinite;

  svg {
    circle {
      animation: ${circle} 1.5s ease-in-out infinite;
    }
  }
`;

/** 圈圈 spin */
const RoundSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, style, size = 30, color = 'currentColor', strokeWidth = 3, ...rest } = props;
  const elRef = React.useRef();

  React.useImperativeHandle(ref, () => elRef.current);

  return (
    <StyledLoader
      {...rest}
      style={{ fontSize: size, ...style }}
      ref={elRef}
      className={clsx(className, 'uc-round-spin')}
    >
      <svg {...SVGProps} stroke={color} viewBox={`25 25 50 50`}>
        <circle cx="50" cy="50" r="20" strokeLinecap="round" style={{ strokeWidth }}></circle>
      </svg>
    </StyledLoader>
  );
});

RoundSpin.displayName = 'UC-RoundSpin';

export default RoundSpin;
