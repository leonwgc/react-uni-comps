import React from 'react';
import type { BaseProps, StringOrNumber } from './types';
/** 滚动数字 */
declare const RollingNumber: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    /** 滚动数字 */
    number: StringOrNumber;
    /** 延迟开始时间
     *
     * @default 200
     */
    delay?: number;
} & BaseProps & React.RefAttributes<HTMLSpanElement>>;
export default RollingNumber;
