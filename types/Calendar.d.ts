import React from 'react';
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
    onChange?: (val: Date | Date[]) => void;
    value?: Date | Date[];
    defaultValue?: Date | Date[];
};
export declare type DateType = Date | Date[];
export declare type ValueRefType = {
    value?: DateType;
};
/** 日历,基于react-calendar  */
declare const Calendar: React.ForwardRefExoticComponent<Props & React.RefAttributes<ValueRefType>>;
export default Calendar;
