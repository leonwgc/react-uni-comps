import React from 'react';
export declare type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'prefix'> & {
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
    /** 处理IME输入法,默认 false */
    ime?: boolean;
    /** 是否显示清除按钮,默认false*/
    clearable?: boolean;
};
declare type RefType = HTMLInputElement | HTMLTextAreaElement | HTMLAnchorElement;
/** 单行/多行输入框 input/textarea */
declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "prefix"> & {
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
    /** 处理IME输入法,默认 false */
    ime?: boolean;
    /** 是否显示清除按钮,默认false*/
    clearable?: boolean;
} & React.RefAttributes<RefType>>;
export default Input;
