import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';

export type Props = {
  color?: string /** 颜色 */;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

const StyledSwitch = styled.button`
  position: relative;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  border-radius: 100px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;

  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  align-items: center;
  outline: 0;
  position: relative;
  user-select: none;
  -moz-appearance: none;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::after {
    background-color: #fff;
    position: absolute;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    content: ' ';
    cursor: pointer;
    transition: left 0.3s ease-in-out;
  }

  &.checked {
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};

    &::after {
      left: calc(100% - 18px - 2px);
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;

    &::after {
      cursor: not-allowed;
    }
  }
`;

/** 开关 */
const Switch = (props: Props): React.ReactElement => {
  const {
    color = colors.primary,
    disabled,
    checked,
    defaultChecked,
    className,
    style = {},
    onChange,
    ...rest
  } = props;

  const [_checked, _setChecked] = useState(() => {
    return typeof checked !== 'undefined'
      ? checked
      : typeof defaultChecked !== 'undefined'
      ? defaultChecked
      : false;
  });

  return (
    <StyledSwitch
      color={color}
      onClick={() => {
        if (typeof onChange === 'function') {
          onChange(!_checked);
        }
        _setChecked(!_checked);
      }}
      style={{ ...style }}
      disabled={disabled}
      className={clsx('uc-switch', className, {
        disabled: disabled,
        checked: _checked,
      })}
      {...rest}
    ></StyledSwitch>
  );
};

export default Switch;
