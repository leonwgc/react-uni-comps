import React from 'react';
declare type Props = {
    /** 是否弹出 */
    visible?: boolean;
    /** 关闭 */
    onClose?: () => void;
    /** 移动端不会触发onChange, 请使用onOk 点击确认触发*/
    onChange?: (val: Date | Date[]) => void;
    value?: Date | Date[];
    defaultValue?: Date | Date[];
    style?: React.CSSProperties;
    className?: string;
    /** 自定义头  */
    header?: React.ReactNode;
    /** 自定义底部  */
    footer?: React.ReactNode;
    /** US */
    calendarType?: string;
    /** zh-CN */
    locale?: string;
    formatDay?: (locale: string, date: Date) => number;
    minDetail?: string;
    /** 点击遮罩是否关闭,默认true*/
    closeOnMaskClick?: boolean;
    okText?: React.ReactNode;
    title?: React.ReactNode;
    cancelText?: React.ReactNode;
    /** 移动端点击确认触发*/
    onOk?: (value: Date | Date[]) => void;
    /** input左边内容 */
    prefix?: React.ReactNode;
    /** input右边内容 */
    suffix?: React.ReactNode;
};
/** 日期选择  */
declare const DatePicker: {
    (props: Props): React.ReactNode;
    displayName: string;
};
export default DatePicker;
