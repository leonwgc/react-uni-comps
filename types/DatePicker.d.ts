import React from 'react';
declare type Props = {
    /** 值 */
    value?: string;
    /** 关闭回调 */
    onClose: () => void;
    /** 点击确定回调 */
    onOk?: (value: Date) => void;
    /** 是否显示 */
    visible?: boolean;
    /** 确定文本 */
    okText?: React.ReactNode;
    /** 中间标题 */
    title?: React.ReactNode;
    /** 最小年份, 默认1980 */
    minYear?: number;
    /** 最大年份, 默认2030 */
    maxYear?: number;
    /** 取消文本 */
    cancelText?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** 语言,默认中文 */
    locale?: 'zh' | 'en';
};
/** 移动端日期选择 */
declare const DatePicker: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default DatePicker;
