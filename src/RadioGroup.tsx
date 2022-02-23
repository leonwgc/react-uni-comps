import React, { ReactNode, useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Radio from './Radio';
import { isObject } from './helper';
import type { StringOrNumber } from './types';
import Space from './Space';

type LabelValue = {
  label?: React.ReactNode;
  value: StringOrNumber;
};

type Props = {
  /** 按钮风格，默认false */
  button?: boolean | 'fill' | 'outline';
  /** 受控模式下的默认值 */
  value?: StringOrNumber;
  /** 禁用 */
  disabled?: boolean;
  /** 选项列表 */
  options?: LabelValue[] | ReactNode[];
  /** 选项checked改变时回调 */
  onChange?: (val: StringOrNumber) => void;
  className?: string;
  style?: React.CSSProperties;
};

const StyledRadioGroup = styled.div``;

/** 一组单选框 */
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
    <StyledRadioGroup {...rest} ref={ref} className={clsx(className, 'uc-radio-group')}>
      <Space>
        {options.map((option) => {
          const item: LabelValue = {} as LabelValue;

          if (isObject(option)) {
            item.label = (option as LabelValue).label;
            item.value = (option as LabelValue).value;
          } else {
            item.label = option;
            item.value = option as StringOrNumber;
          }

          return (
            <Radio
              button={button}
              disabled={disabled}
              key={item.value}
              onChange={(c) => onCheckboxChange(c, item.value)}
              checked={value === item.value}
            >
              {item.label}
            </Radio>
          );
        })}
      </Space>
    </StyledRadioGroup>
  );
});

RadioGroup.displayName = 'UC-RadioGroup';

export default RadioGroup;
