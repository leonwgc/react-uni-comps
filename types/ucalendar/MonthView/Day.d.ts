/// <reference types="react" />
export default function Day({ formatDay, formatLongDate, calendarType, classes, currentMonthIndex, ...otherProps }: {
    [x: string]: any;
    formatDay?: (locale: any, date: any) => any;
    formatLongDate?: (locale: any, date: any) => any;
    calendarType: any;
    classes: any;
    currentMonthIndex: any;
}): JSX.Element;
