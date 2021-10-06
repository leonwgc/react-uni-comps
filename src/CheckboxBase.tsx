import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import IconTick from './IconTick';
import * as colors from './colors';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import useCallbackRef from './hooks/useCallbackRef';

type Props = {
  /** box宽高，默认18 */
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
  children: React.ReactNode;
  /** box class */
  className?: string;
  /** box style */
  style?: React.CSSProperties;
  /** 展示为checkbox/radio,默认checkbox */
  mode?: 'checkbox' | 'radio';
  /** 根据 value 进行比较，判断是否选中, 用于list */
  value?: string | number;
} & HTMLAttributes<HTMLDivElement>;

const StyledCheckboxBaseWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;

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
      border-color: ${colors.border};
    }
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.border};
    border-radius: 2px;
    background: #fff;
    transition: all 0.24s ease-in-out;
    color: #fff;
  }
`;

/** Checkbox/Radiobox 的基础 */
const CheckboxBase = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    size = 18,
    className,
    onChange,
    style,
    defaultChecked,
    mode = 'checkbox',
    checked,
    disabled,
    children,
    ...rest
  } = props;

  const [c, setC] = useState(typeof checked === 'boolean' ? checked : defaultChecked);
  const onChangeRef = useCallbackRef(onChange);

  useUpdateEffect(() => {
    onChangeRef.current?.(c);
  }, [c]);

  useUpdateEffect(() => {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);

  return (
    <StyledCheckboxBaseWrapper
      ref={ref}
      className={clsx('uc-checkbox', mode, {
        disabled: disabled,
        checked: c,
        mobile: isMobile,
        pc: !isMobile,
      })}
      onClick={() => {
        if (disabled) return;
        if (mode === 'checkbox' || c !== true) {
          setC(!c);
        }
      }}
    >
      <div
        {...rest}
        className={clsx('checkbox', className)}
        style={{
          ...style,
          width: size,
          height: size,
        }}
      >
        <IconTick size={size * 0.6} />
      </div>
      {children && <span className="text">{children}</span>}
    </StyledCheckboxBaseWrapper>
  );
});

CheckboxBase.displayName = 'UC-CheckboxBase';

export default CheckboxBase;
