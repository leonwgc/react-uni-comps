import React from 'react';
import type { BaseProps } from './types';
/** 遮罩层 */
declare const Mask: React.ForwardRefExoticComponent<{
    /**
     * 显示遮罩时，设置body.style.overflow为hidden
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
    children?: React.ReactElement;
    /**
     * 透明度
     * @default 0.45
     */
    opacity?: number;
    onClick?: (e: React.SyntheticEvent) => void;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Mask;
