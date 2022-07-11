import React from 'react';
import type { StringOrNumber } from './types';
/** 加载指示器,三个跳动的小球 */
declare const DotSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 小球宽高
     * @default 3
     */
    size?: StringOrNumber;
    /**
     * 小球间距
     * @default 4
     */
    gap?: StringOrNumber;
    /**
     * 小球颜色
     * @default #D9D9D9
     */
    color?: string;
    /**
     * 动画次数
     * @default 1
     */
    iteration?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default DotSpin;
