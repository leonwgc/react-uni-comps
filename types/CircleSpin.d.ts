import React from 'react';
import type { StringOrNumber } from './types';
/** 圆圈spin */
declare const CircleSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 动画持续时间 (单位: ms)
     * @default 1000
     */
    duration?: number;
    /**
     * 尺寸
     * @default 32
     */
    size?: StringOrNumber;
    /**
     * 颜色
     * @default currentColor
     */
    color?: string;
    /**
     * 轨道颜色
     * @default #bababa
     */
    trackColor?: string;
    /**
     * 轨道宽度 <= 8
     * @default 8
     */
    strokeWidth?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default CircleSpin;
