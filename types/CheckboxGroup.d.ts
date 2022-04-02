import React, { ReactNode } from 'react';
import type { StringOrNumber } from './types';
import type { BaseProps } from './types';
declare type LabelValue = {
    label?: React.ReactNode;
    value: StringOrNumber;
};
/** 一组复选框 */
declare const CheckboxGroup: React.ForwardRefExoticComponent<{
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
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default CheckboxGroup;
