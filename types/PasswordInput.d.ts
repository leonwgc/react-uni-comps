import React from 'react';
import type { BaseProps } from './types';
export declare type RefType = {
    /** 触发获得焦点 */
    focus: () => void;
};
/** 密码输入框 */
declare const PasswordInput: React.ForwardRefExoticComponent<{
    /** 值 */
    value: string;
    /** 输入完成回调 */
    onFinish?: (v: string) => void;
    /** 输入回调 */
    onChange: (v: string) => void;
    /** 获取焦点回调 */
    onFocus?: () => void;
    /**
     * 输入长度
     * @default 6
     *  */
    length?: number;
    /**
     * 不显示原文
     * @default true
     *  */
    mask?: boolean;
    /** 使用模拟输入框，键盘无法输入*/
    userVirtualInput?: boolean;
    /** 自动获取焦点 */
    autoFocus?: boolean;
} & BaseProps & React.RefAttributes<RefType>>;
export default PasswordInput;
