import React from 'react';
export declare type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'onChange'> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'onChange'> & {
    /** 是否只读 */
    readOnly?: boolean;
    /** 值 */
    value?: string;
    /** 默认值 */
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
    /** 点击清除按钮后触发 */
    onClear?: () => void;
};
declare type RefType = HTMLInputElement | HTMLTextAreaElement | HTMLAnchorElement;
/** 单行/多行输入框 input/textarea */
declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "prefix"> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "onChange" | "prefix"> & {
    /** 是否只读 */
    readOnly?: boolean;
    /** 值 */
    value?: string;
    /** 默认值 */
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
    /** 点击清除按钮后触发 */
    onClear?: () => void;
} & React.RefAttributes<RefType>>;
export default Input;
