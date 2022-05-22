import React from 'react';
import type { BaseProps } from './types';
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
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Switch;
