import React from 'react';
declare type ignoredEvt = 'prefix' | 'onChange' | 'onFocus' | 'onBlur';
export declare type Props = {
    /** 只读 */
    readOnly?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /**
     * 多行文本的显示行数,显示为textarea
     */
    rows?: number;
    /** 值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    /** focus事件回调 */
    onFocus?: (e: FocusEvent) => void;
    /** blur事件回调 */
    onBlur?: (e: FocusEvent) => void;
    /**
     * textarea 是否高度自适应,受控模式生效
     * @default false
     */
    autoHeight?: boolean;
    /**
     * 处理IME输入法, 受控模式生效
     * @default false
     */
    ime?: boolean;
    /** 是否显示清除按钮
     * @default false
     */
    clearable?: boolean;
    /** 点击清除按钮后触发 */
    onClear?: () => void;
    /** Enter回调 */
    onPressEnter?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt>;
declare type RefType = HTMLInputElement | HTMLTextAreaElement;
/** 单行/多行输入框 input/textarea */
declare const Input: React.ForwardRefExoticComponent<{
    /** 只读 */
    readOnly?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /**
     * 多行文本的显示行数,显示为textarea
     */
    rows?: number;
    /** 值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    /** focus事件回调 */
    onFocus?: (e: FocusEvent) => void;
    /** blur事件回调 */
    onBlur?: (e: FocusEvent) => void;
    /**
     * textarea 是否高度自适应,受控模式生效
     * @default false
     */
    autoHeight?: boolean;
    /**
     * 处理IME输入法, 受控模式生效
     * @default false
     */
    ime?: boolean;
    /** 是否显示清除按钮
     * @default false
     */
    clearable?: boolean;
    /** 点击清除按钮后触发 */
    onClear?: () => void;
    /** Enter回调 */
    onPressEnter?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt> & React.RefAttributes<RefType>>;
export default Input;
