import React from 'react';
import type { StringOrNumber } from './types';
/** 加载指示器,三个跳动的小球 */
declare const DotSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 小球宽高
     * @default 3
     */
    size?: number;
    /**
     * 小球间距
     * @default 4
     */
    gap?: number;
    /**
     * 小球颜色
     * @default #D9D9D9
     */
    color?: string;
    /**
     * 动画时间，单位:ms
     * @default 600
     */
    duration?: number;
    /**
     * 动画次数
     * @default 1
     */
    iterationCount?: StringOrNumber;
} & React.RefAttributes<HTMLDivElement>>;
export default DotSpin;
