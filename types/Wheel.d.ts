import React from 'react';
import type { BaseProps } from './types';
export declare type DataItem = {
    /** 数据显示 */
    label: React.ReactNode;
    /** 数据值 */
    value: string | number;
    /** 级联数据用children */
    children?: DataItem[];
};
declare type Props = {
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
} & BaseProps;
declare const Wheel: React.FC<Props>;
export default Wheel;
