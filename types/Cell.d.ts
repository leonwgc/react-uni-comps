import React, { HTMLAttributes } from 'react';
export declare type Props = {
    /** 标题 */
    label?: React.ReactNode;
    /** 内容 */
    content?: React.ReactNode;
    /** 底部线条颜色,默认#dcdcdc,不想要线条，设置为透明 */
    lineColor?: string;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode | React.ReactNode[];
} & HTMLAttributes<HTMLDivElement>;
/** 列表项，通常用于移动端 */
declare const Cell: React.ForwardRefExoticComponent<{
    /** 标题 */
    label?: React.ReactNode;
    /** 内容 */
    content?: React.ReactNode;
    /** 底部线条颜色,默认#dcdcdc,不想要线条，设置为透明 */
    lineColor?: string;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode | React.ReactNode[];
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Cell;
