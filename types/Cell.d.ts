import React from 'react';
export declare type Props = {
    /** 标题 */
    label?: React.ReactNode;
    /** 内容 */
    content?: React.ReactNode;
    /** 底部线条颜色,默认#dcdcdc,不想要线条，设置为透明 */
    lineColor?: string;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode | React.ReactNode[];
};
/** 列表项，通常用于移动端 */
declare const Cell: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Cell;
