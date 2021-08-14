import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { border, disabled } from './colors';

export type Props = {
  size?: number /** 默认18 */;
  color?: string /** checked状态颜色,默认#004bcc */;
  borderRadius?: string /** 默认2px,圆形设置为50% */;
  onChange?: (checked: boolean) => void /** checked状态改变回调 */;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

const StyledCheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  > span {
    margin-left: 8px;
  }

  &.disabled {
    color: ${disabled};
    cursor: not-allowed;
  }
`;

const StyledCheckbox = styled.div<{
  size: number;
  color: string;
  borderRadius: string;
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid ${border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: #fff;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${({ color }) => color};
  }

  &::before {
    transform: rotate(45deg);
    opacity: 0;
    transition: transform 0.3s ease;
    content: '';
    width: calc(${({ size }) => size}px / 3.5);
    height: calc(${({ size }) => size}px / 2);
    border: calc(${({ size }) => size}px / 9) solid ${({ color }) => color};
    border-top: 0;
    border-left: 0;
    margin-top: calc(${({ size }) => size}px / -12);
    margin-left: calc(${({ size }) => size}px / ${({ size }) => size});
    transition: all 0.2s ease;
  }

  &.checked {
    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    &::before {
      transform: rotate(45deg);
      opacity: 1;
      border-color: #fff;
    }
  }

  &.disabled {
    background-color: ${disabled};
    border-color: ${disabled};
  }
`;

/** Checkbox, Radiobox带checked状态的 */
const Checkbox = (props: Props): React.ReactNode => {
  const {
    color = '#004bcc',
    size = 18,
    borderRadius = '2px',
    onChange,
    defaultChecked,
    checked,
    disabled,
    children,
  } = props;
  const [_checked, _setChecked] = useState(() => {
    return typeof checked !== 'undefined'
      ? checked
      : typeof defaultChecked !== 'undefined'
      ? defaultChecked
      : false;
  });
  return (
    <StyledCheckboxWrapper
      className={clsx('uc-checkbox', { disabled: disabled })}
      onClick={() => {
        if (disabled) return;
        if (typeof onChange === 'function') {
          onChange(!_checked);
        }
        _setChecked(!_checked);
      }}
    >
      <StyledCheckbox
        className={clsx({ checked: _checked, disabled: disabled })}
        borderRadius={borderRadius}
        size={size}
        disabled={disabled}
        color={color}
      ></StyledCheckbox>
      {children ? <span>{children}</span> : null}
    </StyledCheckboxWrapper>
  );
};

export default Checkbox;
