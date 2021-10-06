import React from 'react';
/** 单选框 */
declare const Radio: React.ForwardRefExoticComponent<{
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
    children: React.ReactNode;
    /** box class */
    className?: string;
    /** box style */
    style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Radio;
