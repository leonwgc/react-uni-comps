import React from 'react';
import type { BaseProps } from './types';
/** 进度条 */
declare const ProgressBar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     *
     * 进度百分比（范围：0 ～ 100）
     * @default 0
     */
    percent?: number;
    /**
     * 线条高度
     * @default 4
     */
    height?: number;
    /**
     * 轨道颜色
     * @default #e5e5e5
     */
    trackColor?: string;
    /** 填充的颜色，默认主题色*/
    fillColor?: string;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
