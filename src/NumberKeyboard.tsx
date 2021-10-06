import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import NumberKeyboardBase from './NumberKeyboardBase';
import useUpdateEffect from './hooks/useUpdateEffect';
import Popup from './Popup';

type Props = {
  /** 是否弹出 */
  visible: boolean;
  /** 关闭 */
  onClose: () => void;
  className?: string;
  /** 自定义按钮 ./X */
  customKey?: '.' | 'X' | '';
  /** 按键回调,返回输入的字符串 */
  onChange: (str: string) => void;
  /** 确定按钮文字,默认：确定 */
  okText?: React.ReactNode;
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean;
};

const StyledNumberKeyboard = styled(Popup)`
  width: 100%;
  height: 300px;
`;

/** 数字键盘 */
const NumberKeyboard = (props: Props): React.ReactElement => {
  const {
    visible,
    okText,
    closeOnMaskClick = true,
    customKey = '',
    onClose,
    onChange,
    className,
    ...rest
  } = props;
  const [value, setValue] = useState('');

  useUpdateEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <StyledNumberKeyboard
      {...rest}
      closeOnMaskClick={closeOnMaskClick}
      visible={visible}
      onClose={onClose}
      maskStyle={{ backgroundColor: 'transparent' }}
      position="bottom"
      className={clsx('uc-number-keyboard-picker', className)}
    >
      <NumberKeyboardBase
        okText={okText}
        customKey={customKey}
        onClick={(k) => {
          if (k === 'ok') {
            onClose?.();
          } else if (k === 'backspace') {
            if (value.length) {
              setValue(value.slice(0, value.length - 1));
            }
          } else {
            setValue((v) => v + k);
          }
        }}
      />
    </StyledNumberKeyboard>
  );
};

NumberKeyboard.displayName = 'UC-NumberKeyboard';

export default NumberKeyboard;
