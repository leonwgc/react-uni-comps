import React, { ReactNode, useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';
import Checkbox from './Checkbox';
import { isObject } from './helper';
import type { StringOrNumber } from './types';
import Space from './Space';

type LabelValue = {
  label?: React.ReactNode;
  value: StringOrNumber;
};

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  /**
   * 按钮风格
   * @default false
   */
  button?: boolean | 'fill' | 'outline';
  /** 受控模式下的默认值 */
  value?: Array<StringOrNumber>;
  /** 禁用 */
  disabled?: boolean;
  /** 选项列表 */
  options?: LabelValue[] | ReactNode[];
  /** 选项checked改变时回调 */
  onChange?: (val: Array<StringOrNumber>) => void;
};

const StyledCheckboxGroup = styled.div``;

/** 一组复选框 */
const CheckboxGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, button, onChange, options = [], value = [], disabled, ...rest } = props;

  const onChangeRef = useLatest(onChange);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  return (
    <StyledCheckboxGroup {...rest} ref={ref} className={clsx(className, 'uc-checkbox-group')}>
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
            <Checkbox
              className="uc-checkbox-group-item"
              button={button}
              disabled={disabled}
              key={item.value}
              onChange={(c) => onCheckboxChange(c, item.value)}
              checked={value.indexOf(item.value) > -1}
            >
              {item.label}
            </Checkbox>
          );
        })}
      </Space>
    </StyledCheckboxGroup>
  );
});

CheckboxGroup.displayName = 'UC-CheckboxGroup';

export default CheckboxGroup;
