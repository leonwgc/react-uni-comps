import React from 'react';
import { StringOrNumber } from './types';
/** 菊花spin */
declare const FlowerSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 颜色
     * @default currentColor
     */
    color?: string;
    /**
     * 大小
     * @default 30
     */
    size?: StringOrNumber;
} & React.RefAttributes<HTMLDivElement>>;
export default FlowerSpin;
