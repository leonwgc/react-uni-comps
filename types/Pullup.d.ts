import React from 'react';
declare type Props = {
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
    /** 容器 style */
    style?: React.CSSProperties;
    /** 容器 class */
    className?: string;
    /** 是否使用window滚动,默认false,如果为false wrap将作为滚动容器(需要设置wrap高度)  */
    useWindowScroll?: boolean;
    /** 自定义footer */
    footer?: (loading: boolean, finished: boolean) => React.ReactNode;
};
/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */
declare const Pullup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export default Pullup;
