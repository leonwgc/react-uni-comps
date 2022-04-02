import React from 'react';
import type { StringOrNumber } from './types';
import type { PickerViewRefType } from './PickerView';
/** picker 下方弹出选择器 */
declare const Picker: React.ForwardRefExoticComponent<{
    data?: import("./PickerView").DataType;
    value?: StringOrNumber[];
    onChange?: (value: StringOrNumber[]) => void;
    itemHeight?: number;
    onWheelChange?: (index: number, wheelIndex: number) => void;
    labelRender?: (item: import("./Wheel").DataItem) => React.ReactNode;
} & import("./types").BaseProps & {
    /** 关闭回调 */
    onClose?: () => void;
    /** 点击确定回调 */
    onOk?: (value: Array<StringOrNumber>) => void;
    /** 是否显示 */
    visible?: boolean;
    /** 确定文本 */
    okText?: React.ReactNode;
    /** 中间标题 */
    title?: React.ReactNode;
    /** 取消文本 */
    cancelText?: React.ReactNode;
} & React.RefAttributes<PickerViewRefType>>;
export default Picker;
