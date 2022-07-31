import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';

const radius = 31;
const duration = 1500;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 颜色
   * @default currentColor
   */
  color?: string;
  /**
   * 轨道宽度
   * @default 5
   */
  strokeWidth?: number;
};

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const move = keyframes`
  0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 120, 200;
      stroke-dashoffset: -60;
    }

    100% {
      stroke-dasharray: 120, 200;
      stroke-dashoffset: -180;
    }
`;

const SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'none',
};

const StyledLoader = styled.div<{ $duration: number }>`
  display: inline-flex;
  vertical-align: middle;
  transform: rotate(-90deg);
  animation: ${rotate} 2s linear infinite;

  svg {
    animation: ${move} ${({ $duration }) => $duration}ms ease-in-out infinite;
  }
`;

/** 圈圈 spin */
const RoundSpin = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, color = 'currentColor', strokeWidth = 5, ...rest } = props;
  const elRef = React.useRef();

  React.useImperativeHandle(ref, () => elRef.current);

  return (
    <StyledLoader
      {...rest}
      ref={elRef}
      $duration={duration}
      className={clsx(className, 'uc-round-spin')}
    >
      <svg {...SVGProps} viewBox={`${radius} ${radius} ${radius * 2} ${radius * 2}`}>
        <circle
          cx={radius * 2}
          cy={radius * 2}
          r={radius - (strokeWidth as number) / 2}
          stroke={color}
          strokeLinecap="round"
          style={{ strokeWidth }}
        />
      </svg>
    </StyledLoader>
  );
});

RoundSpin.displayName = 'UC-RoundSpin';

export default RoundSpin;
