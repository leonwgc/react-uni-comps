import React from 'react';
export declare type Props = {
    /** 自动播放,默认false */
    autoPlay?: boolean;
    direction?: 'horizontal' | 'vertical';
    /** 距离下一次播放的间隔毫秒, 默认 3000 */
    interval?: number;
    children: React.ReactElement[];
    /** 容器高度，默认160px */
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
    /** 循环播放,默认true */
    loop?: boolean;
    /** 页面切换后回调 */
    onPageChange?: (pageIndex: number) => void;
    /** 是否显示分页器,默认true */
    showPageIndicator?: boolean;
    /** 滑动比例多少切换，默认0.1 */
    ratio?: number;
    /** 动画时间，默认280 */
    duration?: number;
};
export declare type SlideRefType = {
    prev: () => void;
    next: () => void;
};
/**
 *  轮播
 *
 *  ref: {
 *    prev: () => void;
 *    next: () => void;
 * }
 *
 *
 */
declare const Slide: React.ForwardRefExoticComponent<Props & React.RefAttributes<SlideRefType>>;
export default Slide;
