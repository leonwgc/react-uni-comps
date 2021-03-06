import React from 'react';
/** 遮罩层 */
declare const Mask: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 隐藏body overflow
     * @default true
     */
    hideOverflow?: boolean;
    /** 是否可见 */
    visible?: boolean;
    /**
     * 动画时间
     * @default 280
     */
    duration?: number;
    /**
     * 透明度
     * @default 0.45
     */
    opacity?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default Mask;
