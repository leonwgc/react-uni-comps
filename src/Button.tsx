import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import Spin from './Spin';
import Space from './Space';
import type { BaseProps } from './types';

type Props = BaseProps & {
  /** default 线框，primary 实色框 */
  type?: 'primary' | 'default';
  /** 主题色线框风格 */
  outlined?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  /** 圆形按钮 */
  circle?: boolean;
  /** 虚线边 */
  dashed?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置为展示的标签，比如div,a,button */
  as?: any;
  /** 设置按钮的图标组件 */
  icon?: React.ReactNode;
  /** 设置按钮加载状态 */
  loading?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  /** 点击回调 */
  onClick?: (e: React.SyntheticEvent) => void;
  /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
  wait?: number | boolean;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>;

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 0px 16px;
  height: 32px;

  &.default {
    background-color: #fff;
    border-color: ${vars.border};

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }
    &.pc:hover,
    &.outlined {
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}
    }

    &.mobile:active {
      background-color: ${vars.activeBg};
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }
  &.primary {
    ${getThemeColorCss('background-color')}
    ${getThemeColorCss('border-color')}
    color: #fff;

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.ghost,
    &.ghost:hover,
    &.ghost:active {
      background-color: transparent !important;
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}

      &.danger {
        color: ${vars.danger};
      }
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      background-color: ${vars.danger};
      border-color: ${vars.danger};
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

  &.anchor {
    border: none;
    ${getThemeColorCss('color')}
    height: unset;
    padding: unset;
    margin: unset;
    background: unset;
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
  &.ghost,
  &.ghost:hover {
    background-color: transparent;
    border-color: ${vars.border};
    color: ${vars.border};
  }
`;

/** 按钮 */
const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    type = 'default',
    disabled,
    outlined,
    block,
    className,
    children,
    htmlType,
    circle,
    dashed,
    danger,
    loading,
    ghost,
    onClick,
    wait,
    ...rest
  } = props;

  const [waiting, setWaiting] = useState(false);

  const waitTime =
    typeof wait === 'number' && wait > 0
      ? wait
      : typeof wait === 'boolean' && wait === true
      ? 1000
      : 0;

  const usingWait = waitTime > 0;

  const icon = props.icon || (loading ? <Spin /> : null);

  return (
    <StyledButton
      {...rest}
      ref={ref}
      disabled={disabled}
      type={htmlType}
      onClick={(e) => {
        onClick?.(e);
        if (usingWait) {
          setWaiting(true);
          setTimeout(() => {
            setWaiting(false);
          }, waitTime);
        }
      }}
      className={clsx(
        'uc-btn',
        'uc-button',
        type,
        {
          disabled: disabled || loading || waiting,
          block: block,
          circle: circle,
          dashed: dashed,
          ghost: ghost,
          danger: danger,
          mobile: isMobile,
          pc: !isMobile,
          anchor: rest.as === 'a',
          outlined: outlined,
        },
        className
      )}
    >
      {icon && children ? (
        <Space>
          {icon}
          {children}
        </Space>
      ) : (
        children || icon
      )}
    </StyledButton>
  );
});

Button.displayName = 'UC-Button';

export default Button;
