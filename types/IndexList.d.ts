import React from 'react';
declare type Item = {
    label: string;
    value?: string;
    subItems: Item[];
};
export declare type Props = {
    /** 数据 */
    data: Item[];
    /** 点击数据项回调 */
    onChange?: (item: Omit<Item, 'subItems'>) => void;
};
/** 索引列表 */
declare const IndexList: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default IndexList;
