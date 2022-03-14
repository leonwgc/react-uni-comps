import React, { useState } from 'react';
import clsx from 'clsx';
import Input from './Input';
import useUpdateEffect from './hooks/useUpdateEffect';
import type { StringOrNumber } from './types';

export type Props = {
  /** 禁用 */
  disabled?: boolean;
  /** 值 */
  value?: StringOrNumber;
  /** 默认值 */
  defaultValue?: StringOrNumber;
  /** 值变化时触发的回调函数 */
  onChange?: (value: StringOrNumber) => void;
  className?: string;
  style?: React.CSSProperties;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 小数位数，默认0 */
  digits?: number;
  /** input左边内容 */
  prefix?: React.ReactNode;
  /** input右边内容 */
  suffix?: React.ReactNode;
  /** 是否显示清除按钮,默认false*/
  clearable?: boolean;
  /** 点击清除按钮后触发 */
  onClear?: () => void;
  /** Enter回调 */
  onPressEnter?: (v: string) => void;
};

//#region  style

//#endregion

const limit = (val: number, min, max, digits = 0) => {
  let v = val;
  if (typeof max === 'number') {
    v = Math.min(v, max);
  }
  if (typeof min === 'number') {
    v = Math.max(min, v);
  }

  return v.toFixed(digits);
};

/** 数字输入框 */
const InputNumber: React.FC<Props> = (props) => {
  const { className, defaultValue = '', value, min, max, onChange, digits, ...rest } = props;

  const [val, setVal] = useState(value || defaultValue);

  useUpdateEffect(() => {
    onChange?.(val);
  }, [val]);

  useUpdateEffect(() => {
    if (value != val) {
      setVal(value);
    }
  }, [value]);

  return (
    <Input
      className={clsx('uc-input-number', className)}
      {...rest}
      value={String(val)}
      onChange={(v) => {
        const tv = v.trim();
        const num = Number(tv);
        if (num === num || tv === '-') {
          setVal(tv);
        }
      }}
      onBlur={() => {
        const tv = String(val).trim();
        if (tv.length > 0) {
          const num = Number(tv);
          if (num === num) {
            setVal(limit(Number(val), min, max, digits));
          } else {
            setVal('');
          }
        }
      }}
    />
  );
};

InputNumber.displayName = 'UC-InputNumber';

export default InputNumber;
