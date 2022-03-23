import React, { HTMLAttributes } from 'react';
export declare type Props = {
    /** 是否显示红色*标记 */
    required?: boolean;
    title?: React.ReactNode;
    /** 标题 */
    label?: React.ReactNode;
    /** 标题下方描述 */
    description?: React.ReactNode;
    /** 右侧内容 */
    content?: React.ReactNode;
    /** 底部线条颜色,默认#eee,不想要线条，设置为透明 */
    lineColor?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode;
    /**
     * label左边是否加12px的padding
     * @default true
     */
    withPaddingLeft?: boolean;
} & HTMLAttributes<HTMLDivElement>;
/** 列表项，通常用于移动端 */
declare const Cell: React.ForwardRefExoticComponent<{
    /** 是否显示红色*标记 */
    required?: boolean;
    title?: React.ReactNode;
    /** 标题 */
    label?: React.ReactNode;
    /** 标题下方描述 */
    description?: React.ReactNode;
    /** 右侧内容 */
    content?: React.ReactNode;
    /** 底部线条颜色,默认#eee,不想要线条，设置为透明 */
    lineColor?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode;
    /**
     * label左边是否加12px的padding
     * @default true
     */
    withPaddingLeft?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Cell;
