import React from 'react';
export declare type Props = {
    dataList: Array<unknown> /** 数组数据 */;
    dataRender: (data: unknown, index: number) => React.ReactNode /** 数组数据项自定义render */;
    fetchData: () => Promise<unknown> /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */;
    hasMoreData: boolean /** 指示是否还有更多数据 */;
    spinner?: React.ReactNode /** 加载中 spinner */;
    endText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
    style?: React.CSSProperties /** 容器 style */;
    className?: string /** 容器 class */;
    footerStyle?: React.CSSProperties /** 容器底部包含spinner/endText容器的style */;
};
/** 上滑加载更多数据 */
declare const Pullup: React.FC<Props>;
export default Pullup;
