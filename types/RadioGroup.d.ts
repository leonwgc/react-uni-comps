import React from 'react';
declare type labelValue = {
    label: string;
    value: string | number;
};
declare type Props = {
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
/** 一组复选框 */
declare const RadioGroup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default RadioGroup;