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
  loading?: boolean;
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

const SpinWrap = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  user-select: none;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** 圈圈 spin */
const RoundSpin = (props: Props) => {
  const {
    className,
    style,
    size = 30,
    color = 'currentColor',
    strokeWidth = 3,
    children,
    loading,
    ...rest
  } = props;

  const isNestedPattern = React.useMemo<boolean>(() => typeof children !== 'undefined', [children]);

  const spinElement = (
    <StyledLoader
      {...rest}
      style={{ fontSize: size, ...style }}
      className={clsx(className, 'uc-round-spin')}
    >
      <svg {...SVGProps} stroke={color} viewBox={`25 25 50 50`}>
        <circle cx="50" cy="50" r="20" strokeLinecap="round" style={{ strokeWidth }}></circle>
      </svg>
    </StyledLoader>
  );

  return !isNestedPattern ? (
    spinElement
  ) : loading ? (
    <div
      className={clsx(className, 'uc-round-spin--nested')}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      <SpinWrap>{spinElement}</SpinWrap>
      {children}
    </div>
  ) : (
    children
  );
};

RoundSpin.displayName = 'UC-RoundSpin';

export default RoundSpin;
