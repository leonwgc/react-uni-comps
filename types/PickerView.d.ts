import React from 'react';
import type { DataItem } from './Wheel';
import type { StringOrNumber } from './types';
declare type SimpleDatas = StringOrNumber[];
declare type ObjectDatas = DataItem[] | DataItem[][];
export declare type DataType = ObjectDatas | SimpleDatas;
declare type Props = {
    /** 数据 */
    data?: DataType;
    /** 值 */
    value?: Array<StringOrNumber>;
    /** 值改变回调 */
    onChange?: (value: Array<StringOrNumber>) => void;
    className?: string;
    style?: React.CSSProperties;
    /** 元素高度，默认 35 */
    itemHeight?: number;
    /** 滚动变化回调 */
    onWheelChange?: (index: number, wheelIndex: number) => void;
    /** 自定义label */
    labelRender?: (item: DataItem) => React.ReactNode;
};
export interface PickerViewRefType {
    getValue: () => Array<StringOrNumber>;
}
/** 平铺选择器 */
declare const PickerView: React.ForwardRefExoticComponent<Props & React.RefAttributes<PickerViewRefType>>;
export default PickerView;
