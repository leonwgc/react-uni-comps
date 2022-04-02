import React from 'react';
import type { Props as InputProps } from './Input';
export declare type Props = {
    /**
     * 取消按钮文案
     * @default 取消
     *   */
    cancelText?: React.ReactNode;
    /** 点击取消按钮时触发  */
    onCancel?: () => void;
    /** Enter回调 */
    onSearch?: (v: string) => void;
} & Omit<InputProps, 'rows' | 'autoHeight'>;
/** 搜索框 */
declare const SearchBar: React.ForwardRefExoticComponent<{
    /**
     * 取消按钮文案
     * @default 取消
     *   */
    cancelText?: React.ReactNode;
    /** 点击取消按钮时触发  */
    onCancel?: () => void;
    /** Enter回调 */
    onSearch?: (v: string) => void;
} & Omit<InputProps, "rows" | "autoHeight"> & React.RefAttributes<HTMLDivElement>>;
export default SearchBar;
