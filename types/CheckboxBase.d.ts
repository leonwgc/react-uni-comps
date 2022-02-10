import React from 'react';
/** Checkbox/Radiobox 的基础 */
declare const CheckboxBase: React.ForwardRefExoticComponent<{
    /** 按钮风格，默认false */
    button?: boolean | 'fill' | 'outline';
    /** box宽高，默认18 */
    size?: number;
    /** checked状态改变回调 */
    onChange?: (checked: boolean) => void;
    /** 受控模式下的默认值 */
    checked?: boolean;
    /** 非受控模式下的默认值 */
    defaultChecked?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 右侧内容 */
    children?: React.ReactNode;
    /** box class */
    className?: string;
    /** box style */
    style?: React.CSSProperties;
    /** 展示为checkbox/radio,默认checkbox */
    mode?: 'checkbox' | 'radio';
    /** 根据 value 进行比较，判断是否选中, 用于list */
    value?: string | number;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default CheckboxBase;
