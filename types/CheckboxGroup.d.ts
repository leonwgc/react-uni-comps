import React, { ReactNode } from 'react';
declare type StringOrNumber = string | number;
declare type LabelValue = {
    label?: React.ReactNode;
    value: StringOrNumber;
};
declare type Props = {
    /** 按钮风格，默认false */
    button?: boolean | 'fill' | 'outline';
    /** 受控模式下的默认值 */
    value?: Array<StringOrNumber>;
    /** 禁用 */
    disabled?: boolean;
    /** 选项列表 */
    options?: LabelValue[] | ReactNode[];
    /** 选项checked改变时回调 */
    onChange?: (val: Array<StringOrNumber>) => void;
    className?: string;
    style?: React.CSSProperties;
};
/** 一组复选框 */
declare const CheckboxGroup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default CheckboxGroup;
