import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 形状
   * @default rect
   * */
  shape?: 'rect' | 'circle';
};

const pulse = keyframes`
   0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
`;

const StyledSkeletonBase = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;

  &.rect {
    height: 1.2em;
  }

  &.circle {
    border-radius: 50%;
    display: inline-block;
  }
`;

/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
const SkeletonBase = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { shape = 'rect', className, ...rest } = props;

  return (
    <StyledSkeletonBase {...rest} ref={ref} className={clsx('uc-skeleton', shape, className)} />
  );
});

SkeletonBase.displayName = 'UC-SkeletonBase';

export default SkeletonBase;
