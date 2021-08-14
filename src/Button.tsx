import React from 'react';
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
};

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
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;

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
  }
  &.block {
    display: flex;
  }
`;

/** 按钮 */
const Button = (props: Props): React.ReactElement => {
  const {
    color = colors.primary,
    type = 'default',
    disabled,
    block,
    className = '',
    children,
    ...rest
  } = props;

  const themeColor = disabled ? colors.disabled : color;

  return (
    <StyledButton
      color={themeColor}
      className={clsx('uc-btn', type, { disabled: disabled, block: block }, className)}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
