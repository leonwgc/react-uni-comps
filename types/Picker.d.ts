import React from 'react';
export declare type DataItem = {
    /** 数据显示文本 */
    label: string;
    /** 数据值 */
    value: string | number;
    /** 级联数据用children */
    children?: DataItem[];
};
declare type Props = {
    /** 列数，最多3列,默认1 */
    cols?: 1 | 2 | 3;
    /** 数据 */
    data?: DataItem[] | DataItem[][];
    /** 值 */
    value?: Array<string | number>;
    /** 关闭回调 */
    onClose?: () => void;
    /** 点击确定回调 */
    onOk?: (value: Array<string | number>) => void;
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
    /** 滚动变化回调 */
    onWheelChange?: (index: number, wheelIndex: number) => void;
};
/** picker 选择器 */
declare const Picker: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Picker;
