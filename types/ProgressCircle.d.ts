import React from 'react';
/** 环形进度条 */
declare const ProgressCircle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 进度条颜色,默认读主题色 */
    color?: string;
    /**
     * 进度百分比（范围：0 ～ 100)
     * @default 0
     */
    percent?: number;
    /**
     * 圆弧的宽度
     * @default  10
     */
    strokeWidth?: number;
    /**
     * 圆弧末尾使用的形状
     * @default round
     */
    strokeLinecap?: 'butt' | 'round';
    /** 环中间的内容，比如显示文本等 */
    children?: React.ReactNode;
    /**
     * 环的直径
     * @default 120
     *  */
    size?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default ProgressCircle;
