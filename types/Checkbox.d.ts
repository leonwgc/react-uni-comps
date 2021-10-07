import React from 'react';
/** 复选框 */
declare const Checkbox: React.ForwardRefExoticComponent<{
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
    children: React.ReactNode;
    /** box class */
    className?: string;
    /** box style */
    style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Checkbox;
