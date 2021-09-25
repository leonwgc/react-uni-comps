import React from 'react';
export declare type Props = {
    /** 自动播放 */
    autoPlay?: boolean;
    /** 初始显示第几页 */
    defaultPageIndex?: number;
    direction?: 'horizontal' | 'vertical';
    /** 距离下一次播放的间隔毫秒, 默认 3000 */
    interval?: number;
    children: React.ReactElement[];
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
    /** 滑动比例多少切换，默认0.25 */
    ratio?: number;
};
interface RefType {
    prev: () => void;
    next: () => void;
}
/**  轮播 */
declare const Slide: React.ForwardRefExoticComponent<Props & React.RefAttributes<RefType>>;
export default Slide;
