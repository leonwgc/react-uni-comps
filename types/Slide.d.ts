import React from 'react';
import type { BaseProps } from './types';
export declare type Props = BaseProps & {
    /**
     * 是否自动播放
     * @default false
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
    children: React.ReactElement[];
    /**
     * 容器高度
     * @default 160
     */
    height?: number | string;
    /**
     * 是否循环
     * true
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
declare const Slide: React.ForwardRefExoticComponent<BaseProps & {
    /**
     * 是否自动播放
     * @default false
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
    children: React.ReactElement[];
    /**
     * 容器高度
     * @default 160
     */
    height?: number | string;
    /**
     * 是否循环
     * true
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
} & React.RefAttributes<SlideRefType>>;
export default Slide;
