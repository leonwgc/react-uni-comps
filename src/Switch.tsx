import React, { useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import { prefixClassName } from './helper';

const getClassName = prefixClassName('uc-switch');

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /** 禁用 */
  disabled?: boolean;
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 变化时回调函数 */
  onChange?: (checked: boolean) => void;
  /** 选中时的内容 */
  checkedText?: React.ReactNode;
  /** 非选中时的内容 */
  unCheckedText?: React.ReactNode;
};

const StyledSwitch = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 44px;
  height: 22px;
  border-radius: 100px;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
    transition: left 0.2s ease-in-out;
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

  .${getClassName('text')} {
    font-size: 12px;
    color: #fff;
    margin: 0 7px 0 25px;
    transition: margin 0.2s ease-in-out;

    &.checked {
      margin: 0 25px 0 7px;
    }
  }
`;

/** 开关 */
const Switch = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    disabled,
    checked,
    defaultChecked,
    checkedText,
    unCheckedText,
    className,
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

  useUpdateEffect(() => {
    if (_checked !== checked) {
      _setChecked(checked);
    }
  }, [checked]);

  return (
    <StyledSwitch
      ref={ref}
      onClick={() => {
        if (!disabled) {
          _setChecked(!_checked);
          onChange?.(!_checked);
        }
      }}
      className={clsx(getClassName(), className, {
        disabled: disabled,
        checked: _checked,
      })}
      {...rest}
    >
      <span className={clsx(getClassName('text'), { checked: _checked })}>
        {_checked ? checkedText : unCheckedText}
      </span>
    </StyledSwitch>
  );
});

Switch.displayName = 'UC-Switch';

export default Switch;
