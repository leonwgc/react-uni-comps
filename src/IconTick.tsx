import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

export type Props = {
  /** 大小, 默认16 */
  size?: number;
  /** 勾勾颜色 */
  color?: string;
};

const StyledTick = styled.div<{
  size: number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

/** 勾勾 */
const IconTick = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { color = 'currentColor', size = 16, ...rest } = props;

  return (
    <StyledTick className={clsx('uc-icon-tick')} ref={ref} size={size} {...rest}>
      <svg width={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.113 1.273a1.085 1.085 0 011.526-.082c.433.386.481 1.041.118 1.485l-.035.04-7.245 8.01a1.083 1.083 0 01-1.474.126l-.047-.039-2.59-2.277A1.076 1.076 0 01.274 7.01a1.085 1.085 0 011.483-.126l.042.035 1.786 1.57 6.528-7.216z"
          fill={color}
        />
      </svg>
    </StyledTick>
  );
});

IconTick.displayName = 'UC-IconTick';

export default IconTick;
