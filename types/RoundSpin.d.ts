import React from 'react';
/** 圈圈 spin */
declare const RoundSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 颜色
     * @default currentColor
     */
    color?: string;
    /**
     * 轨道宽度
     * @default 5
     */
    strokeWidth?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default RoundSpin;
