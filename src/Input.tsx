import React, { useEffect, useRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import { getThemeColorCss, getThemeColor } from './themeHelper';
import * as vars from './vars';
import Icon from './Icon';
import clsx from 'clsx';
import color from 'color';
import type { BaseProps } from './types';

type ignoredEvt = 'prefix' | 'onChange' | 'onFocus' | 'onBlur';

export type Props = {
  /** 只读 */
  readOnly?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 多行文本的显示行数,如果设置则组件显示为textarea */
  rows?: number;
  /** 值 */
  value?: string;
  /** 默认值 */
  defaultValue?: string;
  /** input左边内容 */
  prefix?: React.ReactNode;
  /** input右边内容 */
  suffix?: React.ReactNode;
  /** 值变化时触发的回调函数 */
  onChange?: (value: string) => void;
  /** focus事件回调 */
  onFocus?: (e: FocusEvent) => void;
  /** blur事件回调 */
  onBlur?: (e: FocusEvent) => void;
  /** textarea 是否高度自适应,受控模式生效,默认false */
  autoHeight?: boolean;
  /** 处理IME输入法,默认 false */
  ime?: boolean;
  /** 是否显示清除按钮,默认false*/
  clearable?: boolean;
  /** 点击清除按钮后触发 */
  onClear?: () => void;
  /** Enter回调 */
  onPressEnter?: (v: string) => void;
} & BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> &
  Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt>;

//#region  style

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 14px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  color: #333;

  &.pc {
    background-image: none;
    border: 1px solid ${vars.border};
    border-radius: 2px;
    transition: all 0.3s;
    &:hover:not(.disabled, .read-only) {
      ${getThemeColorCss('border-color')}
    }

    &.focused:not(.disabled, .read-only) {
      ${getThemeColorCss('border-color')}
      box-shadow: 0 0 2px 2px ${(props) =>
        color(getThemeColor() || props.theme.color || vars.primary).fade(0.85)};
    }
  }
  &.mobile {
    border: none;
    padding: 0 4px;
    line-height: 24px;
  }

  &.disabled {
    color: #666;
  }

  &.read-only {
  }

  .prefix {
    margin-right: 8px;
  }
  .suffix {
    margin-left: 8px;
    color: #999;
  }

  .clear {
    color: #bcbcbc;
    cursor: pointer;
    line-height: 1;
  }

  input,
  textarea {
    flex: 1;
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    box-shadow: none;
    width: 100%;
  }

  textarea {
    resize: none;
    word-break: break-all;
    word-wrap: break-word;
    & + * {
      align-self: flex-end;
    }
  }
`;
//#endregion
type RefType = HTMLInputElement | HTMLTextAreaElement;

/** 单行/多行输入框 input/textarea */
const Input = React.forwardRef<RefType, Props>((props, ref) => {
  const {
    className,
    style,
    prefix,
    value,
    onChange,
    suffix,
    autoHeight,
    disabled,
    readOnly,
    rows,
    ime,
    clearable,
    onClear,
    onPressEnter,
    ...rest
  } = props;

  const inputRef = useRef<RefType>();
  const isImeModeRef = useRef(false);
  const [compositionValue, setCompositionValue] = useState(value);
  const [focused, setFocused] = useState(false);
  useImperativeHandle(ref, () => inputRef.current);

  const isTextArea = rows && typeof rows === 'number';

  useEffect(() => {
    if (isTextArea && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.scrollTop = 0;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  });

  const inputProps: Record<string, unknown> = {
    onChange: (e) => {
      const val = e.target.value;
      if (!isImeModeRef.current) {
        onChange?.(e.target.value);
      } else {
        setCompositionValue(val);
      }
    },
    value: isImeModeRef.current ? compositionValue : value,
  };

  if (ime) {
    inputProps.onCompositionStart = () => {
      isImeModeRef.current = true;
    };
    inputProps.onCompositionEnd = (e) => {
      isImeModeRef.current = false;
      const val = e.target.value;
      setCompositionValue(val);
      onChange?.(val);
    };
  }

  const elProps: any = {
    ...rest,
    ...inputProps,
    ref: inputRef,
    readOnly,
    disabled,
    onKeyDown: (e) => {
      if (typeof onPressEnter === 'function' && (e.code === 'Enter' || e.which === 13)) {
        onPressEnter?.(e.target.value);
      }
      props.onKeyDown?.(e);
    },
    onFocus: (e: FocusEvent) => {
      setFocused(true);
      props.onFocus?.(e);
    },
    onBlur: (e: FocusEvent) => {
      props.onBlur?.(e);

      setTimeout(() => {
        setFocused(false);
      }, 300);
    },
  };

  if (isTextArea) {
    elProps.rows = rows;
  }

  return (
    <StyledInput
      style={style}
      className={clsx('uc-input', className, {
        'mobile': isMobile,
        'pc': !isMobile,
        'focused': focused,
        'disabled': disabled,
        'read-only': readOnly,
      })}
    >
      {prefix && <span className={clsx('prefix')}>{prefix}</span>}
      {React.createElement(isTextArea ? 'textarea' : 'input', elProps)}

      {clearable && focused && typeof onChange === 'function' && value?.length > 0 && (
        <span className={clsx('suffix', 'clear')}>
          <Icon
            type="uc-icon-clear"
            onClick={() => {
              onChange?.('');
              onClear?.();
            }}
          />
        </span>
      )}
      {suffix && <span className={clsx('suffix')}>{suffix}</span>}
    </StyledInput>
  );
});

Input.displayName = 'UC-Input';

export default Input;
