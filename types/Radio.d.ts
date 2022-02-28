import React from 'react';
/** 单选框 */
declare const Radio: React.ForwardRefExoticComponent<{
    /** 按钮风格，默认false */
    button?: boolean | 'fill' | 'outline';
    /** box宽高，默认20 */
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
    className?: string;
    style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLElement>, "onChange"> & React.RefAttributes<HTMLDivElement>>;
export default Radio;
