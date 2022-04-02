import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Props = {
  /**
   * 是否显示动画效果
   * @default true
   *  */
  animated?: boolean;
  /**
   * 形状
   * @default rect
   * */
  shape?: 'rect' | 'circle';
  /**
   * 高度
   * @default 16
   *  */
  height?: number | string;
  /** 宽度 */
  width?: number | string;
} & BaseProps;

const StyledSkeletonBase = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
  height: 1.2em;

  @keyframes kf-pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  &.react {
  }

  &.circle {
    border-radius: 50%;
    display: inline-block;
  }

  &.pulse {
    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;
  }
`;

/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
const SkeletonBase = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { animated = true, width, height = 16, shape = 'rect', ...other } = props;
  const { style, className, ...rest } = other;

  return (
    <StyledSkeletonBase
      {...rest}
      ref={ref}
      className={clsx('uc-skeleton', shape, { pulse: animated }, className)}
      style={{ width, height, ...style }}
    />
  );
});

SkeletonBase.displayName = 'UC-SkeletonBase';

export default SkeletonBase;
