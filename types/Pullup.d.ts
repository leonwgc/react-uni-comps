import React from 'react';
import type { BaseProps } from './types';
/**
 *  上拉无限滚动
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */
declare const Pullup: React.ForwardRefExoticComponent<{
    /** 数据列表, 作为 dataRender 列表数据 */
    dataList?: Array<unknown>;
    /** 数据渲染, 也可以在children里面遍历dataList */
    dataRender?: (data: unknown, index: number) => React.ReactNode;
    /**
     * ajax获取数据，当拉到底部，还有更多数据时调用
     *  */
    fetchData: () => Promise<unknown>;
    /**
     * 指示是否还有更多数据,true没有更多,false还有
     * @default false
     *  */
    finished: boolean;
    /**
     * 拉到底部，没有更多数据时显示的文本
     * @default 我是有底线的
     *  */
    finishedText?: React.ReactNode;
    /**
     * 加载提示
     * @default 加载中
     *  */
    loadingText?: React.ReactNode;
    /**
     * 是否检测window滚动,默认true
     * 如果为false Pullup将作为滚动容器(此时需要设置height)
     * @default true
     *   */
    useWindowScroll?: boolean;
    /**
     * 容器高度
     * useWindowScroll为false时必须设置
     * */
    height?: number | string;
    /**
     * 自定义底部状态
     *  @default 加载中 | 我是有底线的
     *  */
    footer?: (loading: boolean, finished: boolean) => React.ReactNode;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Pullup;
