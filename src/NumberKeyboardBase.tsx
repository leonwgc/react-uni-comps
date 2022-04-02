import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Button from './Button';
import type { BaseProps } from './types';

type Props = {
  /** 
   * 确定按钮文字
   * @default 确定
   *  */
  okText?: React.ReactNode;
  /** 自定义按钮 */
  customKey?: '.' | 'X' | '';
  onClick: (key: string) => void;
} & BaseProps;

const StyledNumberKeyboardBase = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding-bottom: 22px;
  background-color: #f2f3f5;
  user-select: none;

  .body {
    display: flex;
    padding: 6px 0 0 6px;

    .keys {
      display: flex;
      flex: 3;
      flex-wrap: wrap;

      &.sidebar {
        display: flex;
        flex: 1;
        flex-direction: column;
        max-width: 33%;

        .key {
          max-width: 100%;
        }
      }

      .key {
        position: relative;
        flex: 1;
        flex-basis: 33%;
        box-sizing: border-box;
        padding: 0 6px 6px 0;

        &.zero {
          flex-basis: 66%;
        }
        &.empty {
          display: none;
        }
      }
    }
  }
`;

const Styledkey = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 28px;
  line-height: 1.5;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: 0;
`;

/** 数字键盘基础 */
const NumberKeyboardBase = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClick, okText = '确定', customKey = '', className, ...rest } = props;

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', customKey];

  return (
    <StyledNumberKeyboardBase {...rest} ref={ref} className={clsx('uc-number-keyboard', className)}>
      <div className={clsx('body')}>
        <div className="keys">
          {keys.map((key) => (
            <div
              className={clsx('key', {
                'zero': key === '0',
                'custom-key': key === customKey,
                'empty': key === '',
              })}
              key={key}
            >
              <Styledkey
                onClick={() => {
                  onClick?.(key);
                }}
              >
                {key}
              </Styledkey>
            </div>
          ))}
        </div>
        <div className={clsx('sidebar', 'keys')}>
          <div className={clsx('key')} key={'backspace'}>
            <Styledkey
              onClick={() => {
                onClick?.('backspace');
              }}
            >
              <svg width={32} height={32} viewBox="0 0 32 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z"></path>
              </svg>
            </Styledkey>
          </div>
          <div className={clsx('key')} key={'ok'}>
            <Styledkey
              type="primary"
              onClick={() => {
                onClick?.('ok');
              }}
            >
              {okText}
            </Styledkey>
          </div>
        </div>
      </div>
    </StyledNumberKeyboardBase>
  );
});

NumberKeyboardBase.displayName = 'UC-NumberKeyboardBase';

export default NumberKeyboardBase;
