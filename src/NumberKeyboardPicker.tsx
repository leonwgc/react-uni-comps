import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import NumberKeyboard from './NumberKeyboard';
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
};

const StyledNumberKeyboardPicker = styled(Popup)`
  width: 100%;
  height: 300px;
`;

/** 数字键盘弹出 */
const NumberKeyboardPicker = (props: Props): React.ReactElement => {
  const { visible, customKey = '', onClose, onChange, className, ...rest } = props;
  const [value, setValue] = useState('');

  useUpdateEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <StyledNumberKeyboardPicker
      {...rest}
      visible={visible}
      onMaskClick={onClose}
      maskStyle={{ backgroundColor: 'transparent' }}
      position="bottom"
      className={clsx('uc-number-keyboard-picker', className)}
    >
      <NumberKeyboard
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
    </StyledNumberKeyboardPicker>
  );
};

NumberKeyboardPicker.displayName = 'UC-NumberKeyboardPicker';

export default NumberKeyboardPicker;
