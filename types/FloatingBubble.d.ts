import React from 'react';
declare type Props = {
    /**
     *是否可以水平移动
     *
     * @default true
     */
    x?: boolean;
    /**
     *是否可以垂直移动
     *
     * @default true
     */
    y?: boolean;
    /**
     * 释放执行
     */
    onRelease?: (el: HTMLElement) => void;
} & React.HTMLAttributes<HTMLDivElement>;
/** 浮动气泡  */
declare const FloatingBubble: React.FC<Props>;
export default FloatingBubble;
