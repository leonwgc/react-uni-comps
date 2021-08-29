import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

type Props = {
  /** 大小, 默认16 */
  size?: number;
  /** 颜色 */
  color?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const StyledCross = styled.div<{
  size: number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

/** 用于关闭的 x */
const IconCross = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 16, color = 'currentColor', ...rest } = props;
  return (
    <StyledCross className={clsx('uc-icon-cross')} ref={ref} size={size} {...rest}>
      <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g>
            <rect
              fillOpacity="0.01"
              fill="#FFFFFF"
              x="0"
              y="0"
              width="48"
              height="48"
              strokeWidth="4"
              stroke="none"
              fillRule="evenodd"
            />
            <path
              d="M14,14 L34,34"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              fillRule="evenodd"
            />
            <path
              d="M14,34 L34,14"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </StyledCross>
  );
});

IconCross.displayName = 'UC-IconCross';

export default IconCross;
