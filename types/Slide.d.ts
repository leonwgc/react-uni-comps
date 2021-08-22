import React from 'react';
import BScroll from '@better-scroll/core';
export declare type Props = {
    /** 自动播放 */
    autoplay?: boolean;
    /** 初始显示第几页 */
    defaultPageIndex?: number;
    /** 水平还是垂直播放 */
    direction?: 'horizontal' | 'vertical';
    /** 距离下一次播放的间隔毫秒, 默认 3000 */
    interval?: number;
    children?: React.ReactElement;
    /** 容器高度，默认160px */
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
    /** 循环播放 */
    loop?: boolean;
    /** 页面切换后回调 */
    onPageChange?: (pageIndex: number) => void;
    /** 是否显示分页圆点 */
    showDot?: boolean;
};
interface RefType {
    goToPage: (pageIndex: number) => void;
    prev: () => void;
    next: () => void;
    bs: BScroll;
}
/**  Slide */
declare const Slide: React.ForwardRefExoticComponent<Props & React.RefAttributes<RefType>>;
export default Slide;
