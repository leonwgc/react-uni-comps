import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import * as colors from './colors';
import clsx from 'clsx';

type Props = HTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
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

  &.mobile {
    display: block;
    line-height: 24px;
  }

  &.pc {
    display: inline-block;
    width: 100%;
    padding: 4px 12px;
    color: #000000d9;
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
`;

/** 输入框 */
const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <StyledInput
      {...rest}
      ref={ref}
      className={clsx('uc-input', className, { mobile: isMobile(), pc: !isMobile() })}
    ></StyledInput>
  );
});

Input.displayName = 'UC-Input';

export default Input;
