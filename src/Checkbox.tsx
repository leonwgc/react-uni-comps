import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useThemeColor from './hooks/useThemeColor';
import Tick from './Tick';
import * as colors from './colors';

export type Props = {
  size?: number /** 默认18 */;
  color?: string /** checked状态颜色 */;
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
    color: ${colors.disabledText};
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
  border: 1px solid ${colors.border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: #fff;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${({ color }) => color};
  }

  &.checked {
    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
  }

  &.disabled {
    background-color: ${colors.disabledBg};
    border-color: ${colors.border};
    opacity: 0.4;
  }
`;

/** Checkbox, Radiobox带checked状态的 */
const Checkbox = (props: Props): React.ReactElement => {
  const {
    color,
    size = 18,
    borderRadius = '2px',
    onChange,
    defaultChecked,
    checked,
    disabled,
    children,
  } = props;

  const _color = useThemeColor();

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
        color={color || _color}
      >
        <Tick size={size} color="#fff" />
      </StyledCheckbox>
      {children ? <span>{children}</span> : null}
    </StyledCheckboxWrapper>
  );
};

export default Checkbox;
