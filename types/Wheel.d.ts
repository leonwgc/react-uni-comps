import React from 'react';
declare type DataItem = {
    /** 数据显示文本 */
    label: string;
    /** 数据值 */
    value: string;
    /** 级联数据用children */
    children?: DataItem[];
};
declare type Props = {
    className?: string;
    style?: React.CSSProperties;
    /** 数据列表 */
    data?: Array<DataItem>;
    /** 当前滚动值的索引 */
    index?: number;
    /** 元素高度，默认 35 */
    itemHeight?: number;
    /** 索引改变回调 */
    onIndexChange?: (newIndex: number) => void;
};
declare const Wheel: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Wheel;
