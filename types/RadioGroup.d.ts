import React, { ReactNode } from 'react';
import type { StringOrNumber } from './types';
declare type LabelValue = {
    label?: React.ReactNode;
    value: StringOrNumber;
};
/** 一组单选框 */
declare const RadioGroup: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    /**
     * 按钮风格
     * @default false
     */
    button?: boolean | 'fill' | 'outline';
    /** 受控模式下的默认值 */
    value?: StringOrNumber;
    /** 禁用 */
    disabled?: boolean;
    /** 选项列表 */
    options?: LabelValue[] | ReactNode[];
    /** 选项checked改变时回调 */
    onChange?: (val: StringOrNumber) => void;
} & React.RefAttributes<HTMLDivElement>>;
export default RadioGroup;
