import React, { HTMLAttributes, ReactElement } from 'react';
export declare type Props = {
    /** 显示几行，超过显示省略号, 默认1 */
    lines?: number;
    /** 包裹的文本 */
    children?: ReactElement;
} & HTMLAttributes<HTMLSpanElement>;
/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
declare const Text: React.ForwardRefExoticComponent<{
    /** 显示几行，超过显示省略号, 默认1 */
    lines?: number;
    /** 包裹的文本 */
    children?: ReactElement;
} & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export default Text;
