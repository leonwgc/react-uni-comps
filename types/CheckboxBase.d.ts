import React from 'react';
import type { BaseProps } from './types';
export declare type Props = {
    /** 按钮风格，默认false */
    button?: boolean | 'fill' | 'outline';
    /**
     * 宽高
     * @default 16
     */
    size?: number;
    /** checked状态改变回调 */
    onChange?: (checked: boolean) => void;
    /** 受控模式下的默认值 */
    checked?: boolean;
    /** 非受控模式下的默认值 */
    defaultChecked?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 右侧内容 */
    children?: React.ReactNode;
    /**
     * 展示为checkbox/radio
     * checkbox
     *  */
    mode?: 'checkbox' | 'radio';
    /** 根据 value 进行比较，判断是否选中, 用于list */
    value?: string | number;
    /** 设置 indeterminate 状态，中间横线代替勾勾 */
    indeterminate?: boolean;
} & BaseProps;
/** Checkbox/Radiobox 的基础 */
declare const CheckboxBase: React.ForwardRefExoticComponent<{
    /** 按钮风格，默认false */
    button?: boolean | 'fill' | 'outline';
    /**
     * 宽高
     * @default 16
     */
    size?: number;
    /** checked状态改变回调 */
    onChange?: (checked: boolean) => void;
    /** 受控模式下的默认值 */
    checked?: boolean;
    /** 非受控模式下的默认值 */
    defaultChecked?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 右侧内容 */
    children?: React.ReactNode;
    /**
     * 展示为checkbox/radio
     * checkbox
     *  */
    mode?: 'checkbox' | 'radio';
    /** 根据 value 进行比较，判断是否选中, 用于list */
    value?: string | number;
    /** 设置 indeterminate 状态，中间横线代替勾勾 */
    indeterminate?: boolean;
} & BaseProps & React.RefAttributes<any>>;
export default CheckboxBase;
