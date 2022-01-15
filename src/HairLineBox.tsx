import React from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import clsx from 'clsx';

/** 显示1px的边 */
type Position = 'top' | 'right' | 'bottom' | 'left' | 'all';

type Props = {
  /** 显示1px的边，默认为 bottom 底部,为all则显示4条边 */
  position?: Position;
  /** 边的颜色,默认 #dcdcdc */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 圆角,默认0*/
  borderRadius?: number;
  /** 只在移动端显示 */
  mobile?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledDiv = styled.div<{ position: Position; color: string; borderRadius: number }>`
  position: relative;
  border-radius: ${({ borderRadius }) => borderRadius}px;

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
        color,
      }) => color};

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: 0 0;
      }
    }
  }

  &.pc {
    ${({ position }) => `border${position === 'all' ? '' : '-' + position}`}: 1px solid ${({
      color,
    }) => color};
  }
`;

/** 移动端1像素边框容器 */
const HairLineBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    position = 'bottom',
    borderRadius = 0,
    color = '#dcdcdc',
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
      color={color}
      borderRadius={borderRadius}
    >
      {children}
    </StyledDiv>
  );
});

HairLineBox.displayName = 'UC-HairLineBox';

export default HairLineBox;
