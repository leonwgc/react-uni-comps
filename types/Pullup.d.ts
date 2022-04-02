import React from 'react';
import type { BaseProps } from './types';
/**
 *  上拉无限滚动
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */
declare const Pullup: React.ForwardRefExoticComponent<{
    /** 数组数据 */
    dataList: Array<unknown>;
    /** 数组数据项自定义render */
    dataRender: (data: unknown, index: number) => React.ReactNode;
    /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */
    fetchData: () => Promise<unknown>;
    /** 指示是否还有更多数据,true没有更多,false还有 */
    finished: boolean;
    /** 拉到底部，没有更多数据时显示的文本 */
    finishedText?: React.ReactNode;
    /** 加载中提示 */
    loadingText?: React.ReactNode;
    /** 是否使用window滚动,默认true,如果为false Pullup将作为滚动容器(需要设置height)  */
    useWindowScroll?: boolean;
    /** 容器高度,useWindowScroll为false时必须设置 */
    height?: number | string;
    /** 自定义footer */
    footer?: (loading: boolean, finished: boolean) => React.ReactNode;
    children?: React.ReactNode;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Pullup;
