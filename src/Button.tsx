import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
import Color from 'color';

export type Props = {
  type?: 'primary' | 'default' /** default 线框，primary 实色框 */;
  color?: string /** 线框/背景颜色 */;
  disabled?: boolean;
  style?: React.CSSProperties;
  block?: boolean;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  circle?: boolean /** 圆形按钮 */;
  dashed?: boolean /** 虚线边 */;
  danger?: boolean /** 设置危险按钮 */;
  ghost?: boolean /** 是否幽灵按钮 */;
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
    }
  }
  &.primary {
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};
    color: #fff;

    &:hover {
      background-color: ${({ color }) => Color(color).lighten(0.16).hex()};
    }

    &.ghost,
    &.ghost:hover {
      background-color: transparent;
      border-color: ${({ color }) => color};
      color: ${({ color }) => color};
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
    color = colors.primary,
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
        },
        className
      )}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'uc-button';

export default Button;
