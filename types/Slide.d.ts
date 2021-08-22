import React from 'react';
export declare type Props = {
    autoplay?: boolean;
    defaultPageIndex?: number;
    direction?: 'horizontal' | 'vertical';
    /** 距离下一次播放的间隔毫秒, 默认 3000 */
    interval?: number;
    children?: React.ReactElement;
    dotRender?: (pageIndex: any) => React.ReactNode;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    onPageChange?: (pageIndex: number) => void;
};
/**  Slide */
declare const Slide: (props: Props) => React.ReactElement;
export default Slide;
