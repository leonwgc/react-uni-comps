import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import NumberKeyboardBase from './NumberKeyboardBase';
import useUpdateEffect from './hooks/useUpdateEffect';
import Popup from './Popup';
import type { BaseProps, StringOrNumber } from './types';

type Props = {
  /** 是否弹出 */
  visible: boolean;
  /** 输入最长长度 */
  maxLength?: number;
  /** Ok按键回调 */
  onOk?: (str: string) => void;
  /** 关闭 */
  onClose: () => void;

  /** 自定义按钮 ./X */
  customKey?: '.' | 'X' | '';
  /** 按键回调,返回输入的字符串 */
  onChange: (str: string) => void;
  /**
   * 确定按钮文字
   * @default 确定
   */
  okText?: React.ReactNode;
  /**
   * 点击遮罩是否关闭
   * @default true
   * */
  closeOnMaskClick?: boolean;
  /**
   * 高度
   * @default 260
   * */
  height?: StringOrNumber;
} & BaseProps;

const StyledPopup = styled(Popup)`
  width: 100%;
  background-color: transparent;
`;

/** 数字键盘 */
const NumberKeyboard: React.FC<Props> = (props) => {
  const {
    visible,
    okText,
    closeOnMaskClick = true,
    maxLength,
    customKey = '',
    onOk,
    onClose,
    onChange,
    className,
    style,
    height = 260,
    ...rest
  } = props;
  const [value, setValue] = useState('');

  useUpdateEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <StyledPopup
      {...rest}
      closeOnMaskClick={closeOnMaskClick}
      visible={visible}
      onClose={onClose}
      maskStyle={{ backgroundColor: 'transparent' }}
      position="bottom"
      style={{ ...style, height }}
      className={clsx('uc-number-keyboard-picker', className)}
    >
      <NumberKeyboardBase
        okText={okText}
        customKey={customKey}
        height={height}
        onClick={(k) => {
          if (k === 'ok') {
            onOk?.(value);
            onClose?.();
          } else if (k === 'backspace') {
            if (value.length) {
              setValue(value.slice(0, value.length - 1));
            }
          } else {
            if (
              (typeof maxLength === 'number' && value.length < maxLength) ||
              typeof maxLength === 'undefined'
            ) {
              setValue((v) => v + k);
            }
          }
        }}
      />
    </StyledPopup>
  );
};

NumberKeyboard.displayName = 'UC-NumberKeyboard';

export default NumberKeyboard;
