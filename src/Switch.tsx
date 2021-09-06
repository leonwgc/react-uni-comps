import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';

type Props = {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

const StyledSwitch = styled.div`
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
  vertical-align: middle;

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
    ${getThemeColorCss('background-color')}
    ${getThemeColorCss('border-color')}

    &::after {
      left: calc(100% - 20px);
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;

    &::after {
      cursor: not-allowed;
    }
  }
`;

/** 开关 */
const Switch = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { disabled, checked, defaultChecked, className, onChange, ...rest } = props;

  const [_checked, _setChecked] = useState(() => {
    return typeof checked !== 'undefined'
      ? checked
      : typeof defaultChecked !== 'undefined'
      ? defaultChecked
      : false;
  });

  return (
    <StyledSwitch
      ref={ref}
      onClick={() => {
        if (!disabled) {
          _setChecked(!_checked);
          onChange?.(!_checked);
        }
      }}
      className={clsx('uc-switch', className, {
        disabled: disabled,
        checked: _checked,
      })}
      {...rest}
    ></StyledSwitch>
  );
});

Switch.displayName = 'UC-Switch';

export default Switch;
