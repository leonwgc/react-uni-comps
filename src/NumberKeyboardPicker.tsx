import React, { useState, useEffect } from 'react';
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
  /** 按键回调 */
  onChange: (str: string) => void;
};

const StyledNumberKeyboardPicker = styled(Popup)`
  width: 100%;
  height: 300px;
`;

/** 数字/身份证键盘底部弹出 */
const NumberKeyboardPicker = (props: Props): React.ReactElement => {
  const { visible, onClose, onChange, className, ...rest } = props;
  const [value, setValue] = useState('');

  useUpdateEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <StyledNumberKeyboardPicker
      visible={visible}
      onMaskClick={onClose}
      maskStyle={{ backgroundColor: 'transparent' }}
      position="bottom"
      {...rest}
      className={clsx('uc-number-keyboard-picker', className)}
    >
      <NumberKeyboard
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
