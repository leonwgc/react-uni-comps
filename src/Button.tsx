import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
import { isMobile } from './dom';
import useThemeColor from './hooks/useThemeColor';

type Props = {
  /** default 线框，primary 实色框 */
  type?: 'primary' | 'default';
  disabled?: boolean;
  style?: React.CSSProperties;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
  /** 圆形按钮 */
  circle?: boolean;
  /** 虚线边 */
  dashed?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
} & HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  height: 32px;

  &.default {
    background-color: #fff;
    border-color: ${colors.border};

    :hover {
      border-color: ${({ color }) => color};
      color: ${({ color }) => color};

      border-color: var(--uc-color, ${colors.primary});
      color: var(--uc-color, ${colors.primary});
    }
    &.mobile:active {
      background-color: ${colors.activeBg};
    }
  }
  &.primary {
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};
    background-color: var(--uc-color, ${colors.primary});
    border-color: var(--uc-color, ${colors.primary});
    color: #fff;

    ${isMobile() ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.ghost,
    &.ghost:hover {
      background-color: transparent;
      border-color: ${({ color }) => color};
      color: ${({ color }) => color};
      border-color: var(--uc-color, ${colors.primary});
      color: var(--uc-color, ${colors.primary});
    }
  }
  &.block {
    width: 100%;
  }
  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }
  &.dashed {
    border-style: dashed;
  }

  &.disabled,
  &.disabled:hover {
    background-color: ${colors.disabledBg};
    border-color: ${colors.border};
    cursor: not-allowed;
    color: ${colors.disabledText};
  }
  &.ghost,
  &.ghost:hover {
    background-color: transparent;
    border-color: ${colors.border};
    color: ${colors.border};
  }
`;

/** 按钮 */
const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    type = 'default',
    disabled,
    block,
    className,
    children,
    htmlType,
    circle,
    dashed,
    danger,
    ghost,
    ...rest
  } = props;

  const color = useThemeColor();

  const themeColor = disabled ? colors.disabledText : danger ? colors.danger : color;

  return (
    <StyledButton
      ref={ref}
      color={themeColor}
      disabled={disabled}
      type={htmlType}
      className={clsx(
        'uc-btn',
        type,
        {
          disabled: disabled,
          block: block,
          circle: circle,
          dashed: dashed,
          ghost: ghost,
          mobile: isMobile(),
        },
        className
      )}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'UC-Button';

export default Button;
