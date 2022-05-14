import React from 'react';
import type { BaseProps, StringOrNumber } from './types';
declare type Item = {
    label: React.ReactNode;
    value: StringOrNumber;
};
declare type DataItem = {
    title: React.ReactNode;
    children: Item[];
};
declare type Props = {
    /** 数据 */
    data?: DataItem[];
    /** 点击数据项回调 */
    onItemClick?: (item: Item) => void;
    /**
     * 滚动行为
     * @default smooth
     */
    scrollBehavior?: 'smooth' | 'auto';
} & BaseProps;
/** 索引列表 */
declare const IndexList: React.FC<Props>;
export default IndexList;
