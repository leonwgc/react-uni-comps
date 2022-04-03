import React from 'react';
import type { BaseProps } from './types';
declare type Item = {
    label?: React.ReactNode;
    value?: string;
    subItems?: Item[];
};
declare type Props = {
    /** 数据 */
    data?: Item[];
    /** 点击数据项回调 */
    onItemClick?: (item: Omit<Item, 'subItems'>) => void;
} & BaseProps;
/** 索引列表 */
declare const IndexList: React.FC<Props>;
export default IndexList;
