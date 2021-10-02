import React, { useRef, useEffect, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import * as colors from './colors';
import clsx from 'clsx';
import { isMobile } from './dom';
import useValueRef from './hooks/useValueRef';

type Props = {
  /** 值 */
  value: string;
  /** 输入完成回调 */
  onFinish?: (v: string) => void;
  /** 输入回调 */
  onChange: (v: string) => void;
  /** 获取焦点回调,virtualKeyboard为false才生效 */
  onFocus?: () => void;
  /** 输入长度 */
  length?: number;
  /** 不显示原文 */
  mask?: boolean;
  /** 使用虚拟键盘NumberKeyboard,移动端搭配使用，不弹出原生输入框 ,默认根据环境判断*/
  virtualKeyboard?: boolean;
  style?: React.CSSProperties;
  className?: string;
  /** 自动获取焦点 */
  autoFocus?: boolean;
};

const StyledPasswordInput = styled.div`
  user-select: none;
  height: 50px;
  cursor: pointer;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid ${colors.border};
  margin: 0 16px;

  .item {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 20px;
    line-height: 1.2;
    background-color: #fff;

    &:not(:first-child) {
      border-left: 1px solid ${colors.border};
    }

    .dot {
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 100%;
    }
    input {
      height: 100%;
      width: 100%;
      display: inline-block;
      font-size: 16px;
      text-align: center;
      background-color: transparent;
      border: 0;
      resize: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: none;
      box-shadow: none;
    }
    @keyframes blink {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .virtual-input {
      &.blink {
        width: 1px;
        height: 50%;
        background-color: #333;
        animation: 1s blink infinite;
      }
    }
  }
`;

const getArray = (len: number) => {
  const ar = [];
  for (let i = 0; i < len; i++) {
    ar.push(i + 1);
  }
  return ar;
};

/** 密码输入框 */
const PasswordInput = React.forwardRef<{ focus: () => void }, Props>((props, ref) => {
  const {
    value = '',
    length = 6,
    className,
    mask = true,
    autoFocus = true,
    virtualKeyboard = isMobile,
    onFinish,
    onFocus,
    onChange,
    ...rest
  } = props;

  const arRef = useRef<Array<number>>(getArray(length));
  const inputRefArray = useRef<Array<HTMLInputElement>>([]);

  const autoFocusRef = useValueRef(autoFocus);
  const vRef = useValueRef(value);
  const inputValueRef = useValueRef<string[]>(value.split(''));
  const onFinishRef = useValueRef(onFinish);

  useImperativeHandle(ref, () => ({
    focus: () => {
      setTimeout(() => {
        inputRefArray.current[vRef.current.length]?.focus?.();
      }, 60);
    },
  }));

  useEffect(() => {
    if (value.length === length) {
      onFinishRef.current?.(value);
    }
  }, [value, onFinishRef, length]);

  useEffect(() => {
    if (autoFocusRef.current) {
      inputRefArray.current[vRef.current.length]?.focus?.();
    }
  }, [autoFocusRef, vRef]);

  // prev value check
  const prevInputCheck = useCallback((idx) => {
    for (let i = 0; i < idx; i++) {
      if (!inputValueRef.current[i]) {
        return false;
      }
    }
    return true;
  }, []);

  return (
    <StyledPasswordInput {...rest} className={clsx('uc-password-input', className)}>
      {arRef.current.map((n, idx) => (
        <div className={clsx('item')} key={n}>
          {value.length >= n ? (
            mask ? (
              <div className="dot" />
            ) : (
              value[idx]
            )
          ) : !virtualKeyboard ? (
            <input
              ref={(r) => {
                inputRefArray.current[idx] = r;
              }}
              onChange={(e) => {
                inputValueRef.current[idx] = e.target.value;
                const newValue = inputValueRef.current.join('');
                onChange?.(newValue);
                if (n < length) {
                  inputRefArray.current[idx + 1]?.focus();
                }
              }}
              onKeyDown={(e) => {
                if (!prevInputCheck(idx)) {
                  e.preventDefault();
                }
              }}
              onFocus={onFocus}
            />
          ) : (
            <div className={clsx('virtual-input', { blink: value.length === idx })} />
          )}
        </div>
      ))}
    </StyledPasswordInput>
  );
});

PasswordInput.displayName = 'UC-PasswordInput';

export default PasswordInput;
