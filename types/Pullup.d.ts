import React from 'react';
export declare type Props = {
    dataList: Array<unknown> /** 数组数据 */;
    dataRender: (data: unknown, index: number) => React.ReactNode /** 数组数据项自定义render */;
    fetchData: () => Promise<unknown> /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */;
    finished: boolean /** 指示是否还有更多数据,true没有更多,false还有 */;
    finishedText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
    loadingText?: React.ReactNode /** 加载中提示 */;
    style?: React.CSSProperties /** 容器 style */;
    className?: string /** 容器 class */;
};
/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */
declare const Pullup: (props: Props) => React.ReactNode;
export default Pullup;
