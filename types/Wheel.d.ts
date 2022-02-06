import React from 'react';
export declare type DataItem = {
    /** 数据显示 */
    label: React.ReactNode;
    /** 数据值 */
    value: string | number;
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
    /** 自定义label */
    labelRender?: (item: DataItem) => React.ReactNode;
};
declare const Wheel: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default Wheel;
