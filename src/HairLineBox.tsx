import React from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Pos = 'top' | 'right' | 'bottom' | 'left' | 'all';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 显示1px的边
   * @default bottom
   */
  position?: 'top' | 'right' | 'bottom' | 'left' | 'all';
  /**
   * 边的颜色
   * @default #eee
   */
  color?: string;
  /**
   * 圆角
   * @default 0
   * */
  borderRadius?: number;
  /**
   * 只在移动端显示
   * @default true
   *  */
  mobile?: boolean;
} & BaseProps;

const StyledDiv = styled.div<{ position?: Pos; $color: string; borderRadius?: number }>`
  position: relative;

  &.mobile {
    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: ${({ borderRadius }) => borderRadius}px;
      ${({ position }) => `border${position === 'all' ? '' : '-' + position}`}: 1px solid ${({
        $color,
      }) => $color};

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: 0 0;
      }
    }
  }

  &.pc {
    border-radius: ${({ borderRadius }) => borderRadius}px;
    ${({ position }) => `border${position === 'all' ? '' : '-' + position}`}: 1px solid ${({
      $color,
    }) => $color};
  }
`;

/** 移动端1像素边框容器 */
const HairLineBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    position = 'bottom',
    borderRadius = 0,
    color = '#eee',
    className,
    mobile = true,
    children,
    ...rest
  } = props;

  return (
    <StyledDiv
      {...rest}
      ref={ref}
      className={clsx('uc-hairlinebox', className, {
        mobile: isMobile,
        pc: !isMobile && !mobile,
      })}
      position={position}
      $color={color}
      borderRadius={borderRadius}
    >
      {children}
    </StyledDiv>
  );
});

HairLineBox.displayName = 'UC-HairLineBox';

export default HairLineBox;
