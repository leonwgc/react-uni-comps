import React from 'react';
declare type Props = {
    /** 值 */
    value: string;
    /** 输入完成回调 */
    onFinish?: (v: string) => void;
    /** 输入回调 */
    onChange: (v: string) => void;
    /** 输入长度 */
    length?: number;
    /** 不显示原文 */
    mask?: boolean;
    style?: React.CSSProperties;
    className?: string;
    /** 自动获取焦点 */
    autoFocus?: boolean;
};
/** 密码输入框 */
declare const PasswordInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<{
    focus: () => void;
}>>;
export default PasswordInput;
