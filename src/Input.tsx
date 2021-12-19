import React, { useEffect, useRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import * as vars from './vars';
import Icon from './Icon';
import clsx from 'clsx';

export type Props = {
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  /** input左边内容 */
  prefix?: React.ReactNode;
  /** input右边内容 */
  suffix?: React.ReactNode;
  /** 是否为多行文本输入 */
  textarea?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** 值变化时触发的回调函数 */
  onChange?: (value: string) => void;
  onFocus?: () => void;
  /** textarea 是否高度自适应,默认true */
  autoHeight?: boolean;
  /** 处理IME输入法,默认 false */
  ime?: boolean;
  /** 是否显示清除按钮,默认false*/
  clearable?: boolean;
};

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 14px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;

  &.pc {
    background-image: none;
    border: 1px solid ${vars.border};
    border-radius: 2px;
    transition: all 0.3s;
    &:hover {
      ${getThemeColorCss('border-color')}
    }
  }
  &.mobile {
    border: none;
    padding: 0 4px;
    line-height: 24px;
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
  }

  input,
  textarea {
    flex: 1;
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #333;
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

/** 单行/多行输入框 input/textarea */
const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>((props, ref) => {
  const {
    className,
    style,
    prefix,
    value,
    onChange,
    suffix,
    autoHeight = true,
    textarea,
    ime,
    clearable,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>();
  const isImeModeRef = useRef(false);
  const [compositionValue, setCompositionValue] = useState(value);
  const [focused, setFocused] = useState(false);
  useImperativeHandle(ref, () => inputRef.current);

  useEffect(() => {
    if (textarea && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.scrollTop = 0;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  });

  useEffect(() => {
    if (clearable) {
      inputRef.current.addEventListener('focus', () => {
        setFocused(true);
      });

      inputRef.current.addEventListener('blur', () => {
        setTimeout(() => {
          setFocused(false);
        }, 200);
      });
    }
  }, [clearable]);

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

  return (
    <StyledInput
      style={style}
      className={clsx('uc-input', className, {
        mobile: isMobile,
        pc: !isMobile,
      })}
    >
      {prefix && <span className={clsx('prefix')}>{prefix}</span>}
      {React.createElement(textarea ? 'textarea' : 'input', {
        ...rest,
        ...inputProps,
        ref: inputRef,
      })}

      {clearable && focused && typeof onChange === 'function' && value?.length > 0 && (
        <span className={clsx('suffix', 'clear')}>
          <Icon type="uc-icon-clear" onClick={() => onChange?.('')} />
        </span>
      )}
      {suffix && <span className={clsx('suffix')}>{suffix}</span>}
    </StyledInput>
  );
});

Input.displayName = 'UC-Input';

export default Input;
