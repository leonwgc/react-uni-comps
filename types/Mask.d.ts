import React, { ReactElement } from 'react';
/** 遮罩层 */
declare const Mask: React.ForwardRefExoticComponent<{
    /**
     * 显示遮罩时，设置body.style.overflow为hidden
     * @default true
     */
    hideOverflow?: boolean;
    style?: React.CSSProperties;
    /** 是否可见 */
    visible?: boolean;
    /**
     * 动画时间
     * @default 280
     */
    duration?: number;
    className?: string;
    children?: ReactElement;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Mask;
