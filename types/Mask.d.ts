import React, { ReactElement } from 'react';
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
    children?: ReactElement;
} & BaseProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Mask;
