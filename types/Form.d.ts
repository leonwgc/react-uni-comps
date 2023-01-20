import React from 'react';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
export type { FormInstance } from 'rc-field-form';
import type { Props as CellProps } from './Cell';
/** 排列方式 */
declare type FormLayout = 'vertical' | 'horizontal';
declare type FormContextType = {
    /** 是否显示星号，当rules包含required时，默认true */
    requiredMark?: boolean;
    cellProps?: CellProps;
};
export declare type FormProps = Partial<RcFormProps> & {
    /** 控件和控件距离, 默认16 */
    gap?: number;
    /** 字段没有通过验证是否提示错误 */
    toastError?: boolean;
    /** 是否平滑滚动到错误字段 */
    scrollIntoErrorField?: boolean;
    /** 排列方式
     *
     * @default vertical
     */
    layout?: FormLayout;
    className?: string;
    style?: React.CSSProperties;
    cellProps?: CellProps;
} & FormContextType;
declare type FormItemProps = FieldProps & CellProps;
export declare const FormContext: React.Context<FormContextType>;
declare const _default: React.ForwardRefExoticComponent<Partial<RcFormProps<any>> & {
    /** 控件和控件距离, 默认16 */
    gap?: number;
    /** 字段没有通过验证是否提示错误 */
    toastError?: boolean;
    /** 是否平滑滚动到错误字段 */
    scrollIntoErrorField?: boolean;
    /** 排列方式
     *
     * @default vertical
     */
    layout?: FormLayout;
    className?: string;
    style?: React.CSSProperties;
    cellProps?: CellProps;
} & FormContextType & React.RefAttributes<FormInstance<any>>> & {
    Item: React.FC<FormItemProps>;
};
export default _default;
