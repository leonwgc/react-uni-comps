/// <reference types="react" />
export default function Month({ classes, formatMonth, formatMonthYear, ...otherProps }: {
    [x: string]: any;
    classes: any;
    formatMonth?: (locale: any, date: any) => any;
    formatMonthYear?: (locale: any, date: any) => any;
}): JSX.Element;
