import React from 'react';
import type { Props as InputProps } from './Input';
import type { StringOrNumber } from './types';
export declare type Props = {
    /** 禁用 */
    disabled?: boolean;
    /** 值 */
    value?: StringOrNumber;
    /** 默认值 */
    defaultValue?: StringOrNumber;
    /** 值变化时触发的回调函数 */
    onChange?: (value: StringOrNumber) => void;
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
} & Omit<Partial<InputProps>, 'defaultValue' | 'value' | 'onChange'>;
/** 数字输入框 */
declare const InputNumber: React.ForwardRefExoticComponent<{
    /** 禁用 */
    disabled?: boolean;
    /** 值 */
    value?: StringOrNumber;
    /** 默认值 */
    defaultValue?: StringOrNumber;
    /** 值变化时触发的回调函数 */
    onChange?: (value: StringOrNumber) => void;
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
} & Omit<Partial<InputProps>, "onChange" | "value" | "defaultValue"> & React.RefAttributes<HTMLInputElement>>;
export default InputNumber;
