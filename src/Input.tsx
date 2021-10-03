import React, { HTMLAttributes, useEffect, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import * as colors from './colors';
import clsx from 'clsx';

type Props = {
  /** input左边内容 */
  prefix?: React.ReactNode;
  /** input右边内容 */
  suffix?: React.ReactNode;
  /** 是否为多行文本输入 */
  textarea?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** textarea 是否高度自适应,默认true */
  autoHeight?: boolean;
} & HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 14px;
  width: 100%;
  background-color: #fff;

  &.pc {
    background-image: none;
    border: 1px solid ${colors.border};
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
    line-height: 1.5715;
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
  const { className, style, prefix, suffix, autoHeight = true, textarea, ...rest } = props;
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>();
  useImperativeHandle(ref, () => inputRef.current);

  useEffect(() => {
    if (textarea && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.scrollTop = 0;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  });

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
        ref: inputRef,
      })}

      {suffix && <span className={clsx('suffix')}>{suffix}</span>}
    </StyledInput>
  );
});

Input.displayName = 'UC-Input';

export default Input;
