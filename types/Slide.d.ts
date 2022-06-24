import React from 'react';
import type { StringOrNumber } from './types';
export declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 是否自动播放
     */
    autoPlay?: boolean;
    /**
     * 水平还是垂直
     * @default horizontal
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * 距离下一次播放的间隔毫秒
     * @default 3000
     */
    interval?: number;
    /**
     * 容器高度
     * @default 160
     */
    height?: StringOrNumber;
    /**
     * 是否循环
     * @default true
     */
    loop?: boolean;
    /** 页面切换后回调 */
    onPageChange?: (pageIndex: number) => void;
    /**
     * 是否显示分页器
     * @default true
     */
    showPageIndicator?: boolean;
    /**
     * 滑动比例多少切换
     * @default 0.1
     */
    ratio?: number;
    /**
     * 动画时间
     * @default 280
     */
    duration?: number;
    /**
     * 分页容器样式
     *
     */
    pageStyle?: React.CSSProperties;
    /**
     * 分页容器类名
     *
     */
    pageClassName?: string;
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
declare const Slide: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 是否自动播放
     */
    autoPlay?: boolean;
    /**
     * 水平还是垂直
     * @default horizontal
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * 距离下一次播放的间隔毫秒
     * @default 3000
     */
    interval?: number;
    /**
     * 容器高度
     * @default 160
     */
    height?: StringOrNumber;
    /**
     * 是否循环
     * @default true
     */
    loop?: boolean;
    /** 页面切换后回调 */
    onPageChange?: (pageIndex: number) => void;
    /**
     * 是否显示分页器
     * @default true
     */
    showPageIndicator?: boolean;
    /**
     * 滑动比例多少切换
     * @default 0.1
     */
    ratio?: number;
    /**
     * 动画时间
     * @default 280
     */
    duration?: number;
    /**
     * 分页容器样式
     *
     */
    pageStyle?: React.CSSProperties;
    /**
     * 分页容器类名
     *
     */
    pageClassName?: string;
} & React.RefAttributes<SlideRefType>>;
export default Slide;
