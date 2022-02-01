import React from 'react';
export declare type DataItem = {
    /** 数据显示文本 */
    label: string;
    /** 数据值 */
    value: string | number;
    /** 级联数据用children */
    children?: DataItem[];
};
declare type SimpleDatas = string[] | number[];
declare type ObjectDatas = DataItem[] | DataItem[][];
declare type Props = {
    /** 列数，最多3列,默认1 */
    cols?: 1 | 2 | 3;
    /** 数据 */
    data?: ObjectDatas | SimpleDatas;
    /** 值 */
    value?: Array<string | number>;
    /** 值改变回调 */
    onChange?: (value: Array<string | number>) => void;
    className?: string;
    style?: React.CSSProperties;
    /** 元素高度，默认 35 */
    itemHeight?: number;
    /** 滚动变化回调 */
    onWheelChange?: (index: number, wheelIndex: number) => void;
};
export interface PickerViewRefType {
    getValue: () => Array<string | number>;
}
/** 平铺选择器 */
declare const PickerView: React.ForwardRefExoticComponent<Props & React.RefAttributes<PickerViewRefType>>;
export default PickerView;
