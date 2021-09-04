import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

type Props = {
  /** 大小, 默认16 */
  size?: number;
  /** 颜色 */
  color?: string;
  /** 箭头方向，默认朝下 */
  direction: 'right' | 'bottom' | 'left' | 'top';
};

const StyledArrow = styled.div<{
  size: number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  &.right {
    svg {
      transform: rotate(-90deg);
    }
  }

  &.left {
    svg {
      transform: rotate(90deg);
    }
  }
  &.top {
    svg {
      transform: rotate(-180deg);
    }
  }

  &.bottom {
  }
`;

/** 勾勾 */
const IconArrow = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { color = 'currentColor', direction = 'bottom', size = 16, ...rest } = props;

  return (
    <StyledArrow
      ref={ref}
      className={clsx('uc-icon-arrow', { [direction]: direction })}
      size={size}
      {...rest}
    >
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={color}
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </StyledArrow>
  );
});

IconArrow.displayName = 'UC-IconArrow';

export default IconArrow;
