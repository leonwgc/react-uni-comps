import React from 'react';
/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
declare const Text: React.ForwardRefExoticComponent<{
    /** 显示几行，超过显示省略号, 默认1 */
    lines?: number;
    /** 包裹的内容 */
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLSpanElement>>;
export default Text;
