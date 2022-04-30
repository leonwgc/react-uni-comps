import React from 'react';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
export type { FormInstance } from 'rc-field-form';
/** 排列方式 */
declare type FormLayout = 'vertical' | 'horizontal';
declare type FormContextType = {
    /** 是否显示星号，当rules包含required时，默认true */
    requiredMark?: boolean;
};
export declare type FormProps = Partial<RcFormProps> & {
    /** 控件和控件距离, 默认16 */
    gap?: number;
    /** 字段没有通过验证是否提示错误，移动端默认true */
    toastError?: boolean;
    /** 是否平滑滚动到错误字段，移动端默认true */
    scrollIntoErrorField?: boolean;
    /** 排列方式
     *
     * @default vertical
     */
    layout?: FormLayout;
    className?: string;
    style?: React.CSSProperties;
} & FormContextType;
declare type FormItemProps = FieldProps & {
    /** 标题 */
    label?: React.ReactNode;
};
export declare const FormContext: React.Context<FormContextType>;
declare const _default: React.ForwardRefExoticComponent<Partial<RcFormProps<any>> & {
    /** 控件和控件距离, 默认16 */
    gap?: number;
    /** 字段没有通过验证是否提示错误，移动端默认true */
    toastError?: boolean;
    /** 是否平滑滚动到错误字段，移动端默认true */
    scrollIntoErrorField?: boolean;
    /** 排列方式
     *
     * @default vertical
     */
    layout?: FormLayout;
    className?: string;
    style?: React.CSSProperties;
} & FormContextType & React.RefAttributes<FormInstance<any>>> & {
    Item: React.FC<FormItemProps>;
};
export default _default;
