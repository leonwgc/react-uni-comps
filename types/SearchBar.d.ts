import React from 'react';
declare type ignoredEvt = 'prefix' | 'onChange' | 'onFocus' | 'onBlur';
export declare type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt> & {
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    /** focus事件回调 */
    onFocus?: (e: FocusEvent) => void;
    /** blur事件回调 */
    onBlur?: (e: FocusEvent) => void;
    /** 处理IME输入法,默认 false */
    ime?: boolean;
    /** 是否显示清除按钮,默认false*/
    clearable?: boolean;
    /** 点击清除按钮后触发 */
    onClear?: () => void;
    /** 取消按钮的文案,默认 取消  */
    cancelText?: React.ReactNode;
    /** 点击取消按钮时触发  */
    onCancel?: () => void;
    /** Enter回调 */
    onSearch?: (v: string) => void;
};
/** 搜索框 */
declare const SearchBar: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, ignoredEvt> & {
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 值变化时触发的回调函数 */
    onChange?: (value: string) => void;
    /** focus事件回调 */
    onFocus?: (e: FocusEvent) => void;
    /** blur事件回调 */
    onBlur?: (e: FocusEvent) => void;
    /** 处理IME输入法,默认 false */
    ime?: boolean;
    /** 是否显示清除按钮,默认false*/
    clearable?: boolean;
    /** 点击清除按钮后触发 */
    onClear?: () => void;
    /** 取消按钮的文案,默认 取消  */
    cancelText?: React.ReactNode;
    /** 点击取消按钮时触发  */
    onCancel?: () => void;
    /** Enter回调 */
    onSearch?: (v: string) => void;
} & React.RefAttributes<HTMLDivElement>>;
export default SearchBar;
