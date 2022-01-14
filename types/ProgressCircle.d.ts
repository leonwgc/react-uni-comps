import React from 'react';
declare type Props = {
    /** 进度条颜色,默认读主题色 */
    color?: string;
    /** 进度百分比（范围：0 ～ 100）, 默认0 */
    percent?: number;
    /** 圆弧的宽度，默认 10 */
    strokeWidth?: number;
    /** 圆弧末尾使用的形状,默认 round */
    strokeLinecap?: 'butt' | 'round';
    /** 环中间的内容，比如显示文本等 */
    children?: React.ReactNode;
    /** 环的直径,默认120 */
    size?: number;
    className?: string;
    style?: React.CSSProperties;
};
/** 环形进度条 */
declare const ProgressCircle: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default ProgressCircle;
