import React from 'react';
export declare type DateType = Date | Date[];
declare type Props = {
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
    onChange?: (val: DateType) => void;
    value?: DateType;
    defaultValue?: DateType;
};
export declare type ValueRefType = {
    value?: DateType;
};
/** 日历,基于react-calendar  */
declare const Calendar: React.ForwardRefExoticComponent<Props & React.RefAttributes<ValueRefType>>;
export default Calendar;
