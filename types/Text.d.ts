import React from 'react';
/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
declare const Text: React.ForwardRefExoticComponent<{
    /**
     * 超过几行显示省略号
     * @default 1
     */
    lines?: number;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<any>>;
export default Text;
