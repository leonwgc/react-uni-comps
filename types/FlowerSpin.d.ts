import React from 'react';
/** 菊花spin */
declare const FlowerSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 动画持续时间 (单位: ms)
     * @default 640
     */
    duration?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default FlowerSpin;
