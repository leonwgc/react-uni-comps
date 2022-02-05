import React, { ReactNode } from 'react';
declare type PullStatus = 'init' | 'pulling' | 'canRelease' | 'refreshing' | 'complete';
declare type Props = {
    /** 触发刷新时的处理函数 */
    onRefresh?: () => Promise<any>;
    /** 下拉的提示文案 */
    pullingText?: ReactNode;
    /** 释放的提示文案 */
    canReleaseText?: ReactNode;
    /** 刷新时的提示文案 */
    refreshingText?: ReactNode;
    /** 完成时的提示文案 */
    completeText?: ReactNode;
    /** 完成后延迟消失的时间，单位为 ms,默认500ms */
    completeDelay?: number;
    /** 头部提示内容区的高度，单位px, 默认40 */
    headHeight?: number;
    /** 触发刷新需要下拉多少距离，单位px, 默认60 */
    threshold?: number;
    /** 根据下拉状态，自定义下拉提示文案 */
    renderText?: (status: PullStatus) => ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** 检查window滚动还是子元素滚动,默认false  */
    useWindowScroll?: boolean;
    /** 触发下拉刷新的元素,比如Pull */
    children?: React.ReactElement;
};
/** 下拉刷新 */
declare const PullToRefresh: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default PullToRefresh;
