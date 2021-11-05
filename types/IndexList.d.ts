import React from 'react';
declare type Item = {
    label: React.ReactNode;
    value?: string;
    subItems: Item[];
};
declare type Props = {
    className?: string;
    /** 数据 */
    data: Item[];
    /** 点击数据项回调 */
    onItemClick?: (item: Omit<Item, 'subItems'>) => void;
};
/** 索引列表 */
declare const IndexList: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default IndexList;
