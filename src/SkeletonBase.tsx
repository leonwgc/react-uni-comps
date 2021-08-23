import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

export type Props = {
  animate?: boolean /** 是否显示动画效果，默认显示 */;
  shape?: 'rect' | 'circle' /** 形状：默认 react */;
  height?: number | string /** 高度，默认16px */;
  width?: number | string /** 宽度 */;
} & React.HTMLAttributes<HTMLDivElement>;

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
  const { animate = true, width, height = 16, shape = 'rect', ...other } = props;
  const { style = {}, className = '', ...rest } = other;

  return (
    <StyledSkeletonBase
      ref={ref}
      className={clsx('uc-skeleton', shape, { pulse: animate }, className)}
      style={{ width, height, ...style }}
      {...rest}
    />
  );
});

SkeletonBase.displayName = 'UC-SkeletonBase';

export default SkeletonBase;
