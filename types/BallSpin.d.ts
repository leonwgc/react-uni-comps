import React from 'react';
/** 转圈圈spin */
declare const BallSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 动画持续时间 (单位: ms)
     * @default 640
     */
    duration?: number;
    /**
     * 显示中心圆圈
     */
    showCircle?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export default BallSpin;
