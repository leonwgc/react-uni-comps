import React from 'react';
export declare type Props = {
    readOnly?: boolean;
    value?: string;
    defaultValue?: string;
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
    /** 是否为多行文本输入 */
    textarea?: boolean;
    className?: string;
    style?: React.CSSProperties;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    onFocus?: () => void;
    /** textarea 是否高度自适应,默认true */
    autoHeight?: boolean;
};
/** 单行/多行输入框 input/textarea */
declare const Input: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default Input;
