import React from 'react';
declare type Props = {
    /** 值 */
    value: string;
    /** 输入完成回调 */
    onFinish?: (v: string) => void;
    /** 输入回调 */
    onChange: (v: string) => void;
    /** 获取焦点回调,virtualKeyboard为false才生效 */
    onFocus?: () => void;
    /** 输入长度 */
    length?: number;
    /** 不显示原文 */
    mask?: boolean;
    /** 使用模拟输入框，键盘无法输入*/
    userVirtualInput?: boolean;
    style?: React.CSSProperties;
    className?: string;
    /** 自动获取焦点 */
    autoFocus?: boolean;
};
export declare type RefType = {
    /** 触发获得焦点 */
    focus: () => void;
};
/** 密码输入框 */
declare const PasswordInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<RefType>>;
export default PasswordInput;
