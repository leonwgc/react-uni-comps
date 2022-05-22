import React from 'react';
import type { BaseProps } from './types';
export declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /** 是否显示红色*标记 */
    required?: boolean;
    /**
     * 老代码label
     * @deprecated
     */
    title?: React.ReactNode;
    /** 标题 */
    label?: React.ReactNode;
    /** 标题下方描述 */
    description?: React.ReactNode;
    /** 右侧内容 */
    content?: React.ReactNode;
    /**
     * 底部线条颜色,不要线条，设置为透明
     * @default #eee
     *  */
    lineColor?: string;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode;
    /**
     * label左边是否加12px的padding
     * @default true
     */
    withPaddingLeft?: boolean;
} & BaseProps;
/** 列表项，通常用于移动端 */
declare const Cell: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 是否显示红色*标记 */
    required?: boolean;
    /**
     * 老代码label
     * @deprecated
     */
    title?: React.ReactNode;
    /** 标题 */
    label?: React.ReactNode;
    /** 标题下方描述 */
    description?: React.ReactNode;
    /** 右侧内容 */
    content?: React.ReactNode;
    /**
     * 底部线条颜色,不要线条，设置为透明
     * @default #eee
     *  */
    lineColor?: string;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode;
    /**
     * label左边是否加12px的padding
     * @default true
     */
    withPaddingLeft?: boolean;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Cell;
