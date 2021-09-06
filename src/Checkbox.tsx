import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import IconTick from './IconTick';
import * as colors from './colors';
import { getThemeColorCss } from './themeHelper';

type Props = {
  /** 默认18 */
  size?: number;
  /** checked状态改变回调 */
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const StyledCheckboxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;

  > span {
    margin-left: 8px;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledCheckbox = styled.div<{
  size: number;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid ${colors.border};
  border-radius: 2px;
  background: #fff;
  transition: all 0.3s ease;

  &:hover {
    ${getThemeColorCss('border', '1px solid')}
  }

  &.checked {
    ${getThemeColorCss('background-color')}
    ${getThemeColorCss('border', '1px solid')}
  }

  &.disabled {
    border-color: ${colors.border};
  }
`;

/** Checkbox/Radiobox带checked状态的 */
const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 18, onChange, defaultChecked, checked, disabled, children, ...rest } = props;

  const [_checked, _setChecked] = useState(() => {
    return typeof checked !== 'undefined'
      ? checked
      : typeof defaultChecked !== 'undefined'
      ? defaultChecked
      : false;
  });
  return (
    <StyledCheckboxWrapper
      ref={ref}
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
        size={size}
        disabled={disabled}
        {...rest}
      >
        <IconTick size={size * 0.6} color="#fff" />
      </StyledCheckbox>
      {children ? <span>{children}</span> : null}
    </StyledCheckboxWrapper>
  );
});

Checkbox.displayName = 'UC-Checkbox';

export default Checkbox;
