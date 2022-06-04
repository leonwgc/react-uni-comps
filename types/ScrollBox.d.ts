import React from 'react';
export declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 是否显示指示器
     * @default true
     */
    showIndicator?: boolean;
    /**
     * 指示器样式
     */
    indicatorStyle?: React.CSSProperties;
    /**
     * 指示器颜色
     * @default 默认主题色
     * @default
     */
    fillColor?: string;
};
/** 带指示器的水平滚动盒子 */
declare const ScrollBox: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 是否显示指示器
     * @default true
     */
    showIndicator?: boolean;
    /**
     * 指示器样式
     */
    indicatorStyle?: React.CSSProperties;
    /**
     * 指示器颜色
     * @default 默认主题色
     * @default
     */
    fillColor?: string;
} & React.RefAttributes<HTMLDivElement>>;
export default ScrollBox;
