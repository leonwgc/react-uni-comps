import React from 'react';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { FormProps as RcFormProps } from 'rc-field-form';
/** 排列方式 */
declare type FormLayout = 'vertical' | 'horizontal';
declare type FormContextType = {
    /** 标题宽度,默认80*/
    labelWidth?: number;
    /** 是否显示星号，当rules包含required时，默认true */
    requiredMark?: boolean;
};
export declare type FormProps = RcFormProps & {
    /** 控件和控件距离, 默认16 */
    gap?: number;
    /** 字段没有通过验证是否提示错误，默认false */
    toastError?: boolean;
    /** 排列方式 */
    layout: FormLayout;
    className?: string;
    style?: React.CSSProperties;
} & FormContextType;
declare type FormItemProps = FieldProps & {
    /** 标题 */
    label?: React.ReactNode;
};
export declare const FormContext: React.Context<FormContextType>;
/** 表单 */
declare const Form: React.ForwardRefExoticComponent<FormProps> & {
    /** 表单项 */
    Item?: (props: FormItemProps) => React.ReactElement;
};
export default Form;
