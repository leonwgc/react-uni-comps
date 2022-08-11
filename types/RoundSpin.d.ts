import React from 'react';
import { StringOrNumber } from './types';
/** 圈圈 spin */
declare const RoundSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 颜色
     * @default currentColor
     */
    color?: string;
    /**
     * 轨道宽度
     * @default 3
     */
    strokeWidth?: number;
    /**
     * 大小
     * @default 30
     */
    size?: StringOrNumber;
} & React.RefAttributes<HTMLDivElement>>;
export default RoundSpin;
