declare type DateType = 'y' | 'yyyy' | 'm' | 'mm' | 'd' | 'dd';
export declare type DateOrString = Date | string;
declare const utils: {
    firstDayOfMonth(date: DateOrString): any;
    getDaysInMonth(year: number, month: number): number;
    getDaysByDate(date: DateOrString): number;
    getCurrMonthInfo(year: number, month: number): {
        dayCount: number;
        firstDay: number;
    };
    isLeapYear(year: number | string): boolean;
    getMonthCount(date1: DateOrString, date2: DateOrString): number;
    isToday(date: DateOrString): any;
    isOneDay(date1: DateOrString, date2: DateOrString): boolean;
    isOneMonth(date1: DateOrString, date2: DateOrString): boolean;
    getDay(date: DateOrString, opt?: ReadonlyArray<string>): string;
    parseDay(date: DateOrString): Date;
    parseDate(date: DateOrString | number): Date;
    cloneDate(date: DateOrString, type?: DateType, during?: number): Date;
};
export default utils;
