import React from 'react';
import type { PickerViewRefType, DataType } from './Pickerview';
import type { DataItem } from './Wheel';
import type { StringOrNumber } from './types';
declare type Props = {
    /** 数据 */
    data?: DataType;
    /** 值 */
    value?: Array<StringOrNumber>;
    /** 关闭回调 */
    onClose?: () => void;
    /** 点击确定回调 */
    onOk?: (value: Array<StringOrNumber>) => void;
    /** 值改变回调 */
    onChange?: (value: Array<StringOrNumber>) => void;
    /** 是否显示 */
    visible?: boolean;
    /** 确定文本 */
    okText?: React.ReactNode;
    /** 中间标题 */
    title?: React.ReactNode;
    /** 取消文本 */
    cancelText?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** 元素高度，默认 35 */
    itemHeight?: number;
    /** 滚动变化回调 */
    onWheelChange?: (index: number, wheelIndex: number) => void;
    /** 自定义label */
    labelRender?: (item: DataItem) => React.ReactNode;
};
/** picker 下方弹出选择器 */
declare const Picker: React.ForwardRefExoticComponent<Props & React.RefAttributes<PickerViewRefType>>;
export default Picker;
