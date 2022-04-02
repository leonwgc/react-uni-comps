import React from 'react';
import type { StringOrNumber } from './types';
import type { Props as PickerviewProps, PickerViewRefType } from './PickerView';
export declare type Props = PickerviewProps & {
    /** 关闭回调 */
    onClose?: () => void;
    /** 点击确定回调 */
    onOk?: (value: Array<StringOrNumber>) => void;
    /** 是否显示 */
    visible?: boolean;
    /**
     * 确定文本
     * @default 确定
     *  */
    okText?: React.ReactNode;
    /**
     * 中间标题
     * @default 请选择
     *  */
    title?: React.ReactNode;
    /**
     * 取消文本
     * @default 取消
     *  */
    cancelText?: React.ReactNode;
};
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
    /**
     * 确定文本
     * @default 确定
     *  */
    okText?: React.ReactNode;
    /**
     * 中间标题
     * @default 请选择
     *  */
    title?: React.ReactNode;
    /**
     * 取消文本
     * @default 取消
     *  */
    cancelText?: React.ReactNode;
} & React.RefAttributes<PickerViewRefType>>;
export default Picker;
