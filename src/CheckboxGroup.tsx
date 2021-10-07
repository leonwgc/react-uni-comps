import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Checkbox from './Checkbox';

type labelValue = {
  label: string;
  value: string | number;
};

type Props = {
  /** 按钮风格，默认false */
  button?: boolean | 'fill' | 'outline';
  /** 受控模式下的默认值 */
  value?: string[];
  /** 禁用 */
  disabled?: boolean;
  /** 选项列表 */
  options?: labelValue[] | string[];
  /** 选项checked改变时回调 */
  onChange?: (val: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
};

const StyledCheckboxGroup = styled.div``;

/** 一组复选框 */
const CheckboxGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, button, onChange, options = [], value = [], disabled, ...rest } = props;

  const onChangeRef = useCallbackRef(onChange);

  const onCheckboxChange = useCallback(
    (checked, v) => {
      const vIndex = value.indexOf(v);
      if (!checked) {
        if (vIndex > -1) {
          value.splice(vIndex, 1);
        }
      } else {
        if (vIndex === -1) {
          value.push(v);
        }
      }
      onChangeRef.current?.([...value]);
    },
    [value, onChangeRef]
  );

  return (
    <StyledCheckboxGroup {...rest} ref={ref} className={clsx(className, 'uc-checkbox-group')}>
      {options.map((option) => {
        if (typeof option === 'string') {
          return (
            <Checkbox
              button={button}
              disabled={disabled}
              key={option}
              onChange={(c) => onCheckboxChange(c, option)}
              checked={value.indexOf(option) > -1}
            >
              {option}
            </Checkbox>
          );
        } else {
          return (
            <Checkbox
              button={button}
              disabled={disabled}
              key={option.value}
              onChange={(c) => onCheckboxChange(c, option.value)}
              checked={value.indexOf(option.value) > -1}
            >
              {option.label}
            </Checkbox>
          );
        }
      })}
    </StyledCheckboxGroup>
  );
});

CheckboxGroup.displayName = 'UC-CheckboxGroup';

export default CheckboxGroup;
