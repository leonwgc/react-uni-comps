import React from 'react';
declare type ignoredEvt = 'prefix' | 'onChange' | 'onFocus' | 'onBlur';
export declare type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt> & {
    /** 只读 */
    readOnly?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 多行文本的显示行数,如果设置则组件显示为textarea */
    rows?: number;
    /** 值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    /** focus事件回调 */
    onFocus?: (e: FocusEvent) => void;
    /** blur事件回调 */
    onBlur?: (e: FocusEvent) => void;
    /** textarea 是否高度自适应,受控模式生效,默认false */
    autoHeight?: boolean;
    /** 处理IME输入法,默认 false */
    ime?: boolean;
    /** 是否显示清除按钮,默认false*/
    clearable?: boolean;
    /** 点击清除按钮后触发 */
    onClear?: () => void;
    /** Enter回调 */
    onPressEnter?: (v: string) => void;
};
declare type RefType = HTMLInputElement | HTMLTextAreaElement;
/** 单行/多行输入框 input/textarea */
declare const Input: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt> & {
    /** 只读 */
    readOnly?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 多行文本的显示行数,如果设置则组件显示为textarea */
    rows?: number;
    /** 值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    /** focus事件回调 */
    onFocus?: (e: FocusEvent) => void;
    /** blur事件回调 */
    onBlur?: (e: FocusEvent) => void;
    /** textarea 是否高度自适应,受控模式生效,默认false */
    autoHeight?: boolean;
    /** 处理IME输入法,默认 false */
    ime?: boolean;
    /** 是否显示清除按钮,默认false*/
    clearable?: boolean;
    /** 点击清除按钮后触发 */
    onClear?: () => void;
    /** Enter回调 */
    onPressEnter?: (v: string) => void;
} & React.RefAttributes<RefType>>;
export default Input;
