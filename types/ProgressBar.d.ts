import React from 'react';
declare type Props = {
    /** 进度百分比（范围：0 ～ 100）, 默认0 */
    percent?: number;
    /** 线条高度,默认4 */
    height?: number;
    /** 轨道颜色,默认#e5e5e5*/
    trackColor?: string;
    /** 填充的颜色，默认主题色*/
    fillColor?: string;
    className?: string;
    style?: React.CSSProperties;
};
/** 进度条 */
declare const ProgressBar: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
