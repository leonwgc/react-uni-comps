import React from 'react';
/** 开关 */
declare const Switch: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    /** 禁用 */
    disabled?: boolean;
    /** 指定当前是否选中 */
    checked?: boolean;
    /** 初始是否选中 */
    defaultChecked?: boolean;
    /** 变化时回调函数 */
    onChange?: (checked: boolean) => void;
    /** 选中时的内容 */
    checkedText?: React.ReactNode;
    /** 非选中时的内容 */
    unCheckedText?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default Switch;
