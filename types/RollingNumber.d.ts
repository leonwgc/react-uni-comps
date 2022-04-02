import React from 'react';
import type { BaseProps } from './types';
/** 滚动数字 */
declare const RollingNumber: React.ForwardRefExoticComponent<{
    /** 滚动数字 */
    number: number;
    /** 延迟开始时间
     *
     * @default 200
     */
    delay?: number;
} & BaseProps & React.RefAttributes<HTMLSpanElement>>;
export default RollingNumber;
