import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Radio from './Radio';

type labelValue = {
  label: string;
  value: string | number;
};

type Props = {
  /** 按钮风格，默认false */
  button?: boolean | 'fill' | 'outline';
  /** 受控模式下的默认值 */
  value?: string;
  /** 禁用 */
  disabled?: boolean;
  /** 选项列表 */
  options?: labelValue[] | string[];
  /** 选项checked改变时回调 */
  onChange?: (val: string) => void;
  className?: string;
  style?: React.CSSProperties;
};

const StyledRadioGroup = styled.div``;

/** 一组复选框 */
const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, button, onChange, options = [], value = [], disabled, ...rest } = props;

  const onChangeRef = useCallbackRef(onChange);

  const onCheckboxChange = useCallback(
    (checked, v) => {
      if (checked) {
        onChangeRef.current?.(v);
      }
    },
    [onChangeRef]
  );

  return (
    <StyledRadioGroup {...rest} ref={ref} className={clsx(className, 'uc-checkbox-group')}>
      {options.map((option) => {
        if (typeof option === 'string') {
          return (
            <Radio
              button={button}
              disabled={disabled}
              key={option}
              onChange={(c) => onCheckboxChange(c, option)}
              checked={value === option}
            >
              {option}
            </Radio>
          );
        } else {
          return (
            <Radio
              button={button}
              disabled={disabled}
              key={option.value}
              onChange={(c) => onCheckboxChange(c, option.value)}
              checked={value === option.value}
            >
              {option.label}
            </Radio>
          );
        }
      })}
    </StyledRadioGroup>
  );
});

RadioGroup.displayName = 'UC-RadioGroup';

export default RadioGroup;
