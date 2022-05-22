import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import Button from './Button';
import Icon from './Icon';
import type { BaseProps } from './types';

export type Props = {
  /** 按钮风格，默认false */
  button?: boolean | 'fill' | 'outline';
  /**
   * 宽高
   * @default 16
   */
  size?: number;
  /** checked状态改变回调 */
  onChange?: (checked: boolean) => void;
  /** 受控模式下的默认值 */
  checked?: boolean;
  /** 非受控模式下的默认值 */
  defaultChecked?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 右侧内容 */
  children?: React.ReactNode;
  /**
   * 展示为checkbox/radio
   * checkbox
   *  */
  mode?: 'checkbox' | 'radio';
  /** 根据 value 进行比较，判断是否选中, 用于list */
  value?: string | number;
  /** 设置 indeterminate 状态，中间横线代替勾勾 */
  indeterminate?: boolean;
} & BaseProps;

const StyledButton = styled(Button)`
  &.fill {
    &.checked.default {
      ${getThemeColorCss('background-color')}
      ${getThemeColorCss('border-color')}
      color: #fff;
    }
  }
  &.outline {
    &.checked {
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}
    }
  }
  &:not(:first-child) {
    margin-left: 8px;
  }
`;

const StyledCheckboxBaseWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;

  .text {
    margin-left: 8px;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.pc {
    .checkbox:hover {
      ${getThemeColorCss('border', '1px solid')}
    }
  }

  &.radio {
    .checkbox {
      border-radius: 50%;
    }
  }

  &.checked {
    .checkbox {
      ${getThemeColorCss('background-color')}
      ${getThemeColorCss('border', '1px solid')}
    }
  }

  &.disabled {
    .checkbox {
      border-color: ${vars.border};
    }
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${vars.border};
    border-radius: 2px;
    background: #fff;
    color: #fff;
  }
`;

/** Checkbox/Radiobox 的基础 */
const CheckboxBase = React.forwardRef<any, Props>((props, ref) => {
  const {
    size = 16,
    className,
    button = false,
    onChange,
    defaultChecked,
    mode = 'checkbox',
    checked,
    disabled,
    children,
    indeterminate,
    ...rest
  } = props;

  const [c, setC] = useState(typeof checked === 'boolean' ? checked : defaultChecked);

  useUpdateEffect(() => {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);

  const onClick = () => {
    if (disabled) return;
    if (mode === 'checkbox' || c !== true) {
      const n = !c;
      setC(n);
      onChange?.(n);
    }
  };

  return button ? (
    <StyledButton
      {...rest}
      ref={ref}
      onClick={onClick}
      className={clsx(className, {
        fill: button === 'fill',
        outline: button === 'outline' || button === true,
        checked: c,
        disabled: disabled,
      })}
    >
      {children}
    </StyledButton>
  ) : (
    <StyledCheckboxBaseWrapper
      {...rest}
      ref={ref}
      className={clsx('uc-checkbox', mode, className, {
        disabled: disabled,
        checked: c || indeterminate,
        mobile: isMobile,
        pc: !isMobile,
      })}
      onClick={onClick}
    >
      <div
        className={clsx('checkbox')}
        style={{
          width: size,
          height: size,
          fontSize: indeterminate ? size * 0.8 : size,
        }}
      >
        <Icon type={!indeterminate ? 'uc-icon-tick' : 'uc-icon-jian2'} />
      </div>
      {children && <span className="text">{children}</span>}
    </StyledCheckboxBaseWrapper>
  );
});

CheckboxBase.displayName = 'UC-CheckboxBase';

export default CheckboxBase;
