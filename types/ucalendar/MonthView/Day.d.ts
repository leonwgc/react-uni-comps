/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Day({ formatDay, formatLongDate, calendarType, classes, currentMonthIndex, ...otherProps }: {
    [x: string]: any;
    formatDay?: (locale: any, date: any) => any;
    formatLongDate?: (locale: any, date: any) => any;
    calendarType: any;
    classes: any;
    currentMonthIndex: any;
}): JSX.Element;
declare namespace Day {
    var propTypes: {
        currentMonthIndex: PropTypes.Validator<number>;
        formatDay: PropTypes.Requireable<(...args: any[]) => any>;
        formatLongDate: PropTypes.Requireable<(...args: any[]) => any>;
        activeStartDate: PropTypes.Validator<Date>;
        classes: PropTypes.Validator<string[]>;
        date: PropTypes.Validator<Date>;
        locale: PropTypes.Requireable<string>;
        maxDate: (props: any, propName: any, componentName: any) => Error;
        minDate: (props: any, propName: any, componentName: any) => Error;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
        style: PropTypes.Requireable<{
            [x: string]: string | number;
        }>;
        tileClassName: PropTypes.Requireable<string | string[] | ((...args: any[]) => any)>;
        tileContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        tileDisabled: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default Day;
