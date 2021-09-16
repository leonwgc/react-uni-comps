import React, { HTMLAttributes } from 'react';
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
} & HTMLAttributes<HTMLInputElement>;

const StyledInput = styled.div`
  display: flex;
  align-items: center;

  &.prefix {
    input {
      margin-left: 8px;
    }
  }

  &.suffix {
    input {
      margin-right: 8px;
    }
  }

  &.pc {
    input {
      display: inline-block;
      padding: 4px 12px;
      font-size: 14px;
      line-height: 1.5715;
      background-color: #fff;
      background-image: none;
      border: 1px solid ${colors.border};
      border-radius: 2px;
      transition: all 0.3s;
      &:hover {
        ${getThemeColorCss('border-color')}
      }
    }
  }
  &.mobile {
    input {
      display: block;
      line-height: 24px;
    }
  }
  input {
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
    font-size: 14px;
    width: 100%;
  }
`;

/** 输入框 */
const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, prefix, suffix, ...rest } = props;

  return (
    <StyledInput
      className={clsx('uc-input', className, {
        mobile: isMobile(),
        pc: !isMobile(),
        prefix: prefix,
        suffix: suffix,
      })}
    >
      {prefix && <span className={clsx('prefix')}>{prefix}</span>}
      <input {...rest} ref={ref} />
      {suffix && <span className={clsx('suffix')}>{suffix}</span>}
    </StyledInput>
  );
});

Input.displayName = 'UC-Input';

export default Input;
