import React from 'react';
/** 单行/多行输入框 input/textarea */
declare const Input: React.ForwardRefExoticComponent<{
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
    /** 是否为多行文本输入 */
    textarea?: boolean;
    className?: string;
    style?: React.CSSProperties;
    /** textarea 是否高度自适应,默认true */
    autoHeight?: boolean;
} & React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default Input;
