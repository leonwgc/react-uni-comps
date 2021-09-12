import React from 'react';
/** 列表项，通常用于移动端 */
declare const Cell: React.ForwardRefExoticComponent<{
    /** 标题 */
    title?: React.ReactNode;
    /** 标题下方描述 */
    description?: React.ReactNode;
    /** 右侧内容 */
    content?: React.ReactNode;
    /** 底部线条颜色,默认#eee,不想要线条，设置为透明 */
    lineColor?: string;
    /** 通常放input/textarea等输入控件 */
    children?: React.ReactNode | React.ReactNode[];
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Cell;
