/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Month({ classes, formatMonth, formatMonthYear, ...otherProps }: {
    [x: string]: any;
    classes: any;
    formatMonth?: (locale: any, date: any) => any;
    formatMonthYear?: (locale: any, date: any) => any;
}): JSX.Element;
declare namespace Month {
    var propTypes: {
        formatMonth: PropTypes.Requireable<(...args: any[]) => any>;
        formatMonthYear: PropTypes.Requireable<(...args: any[]) => any>;
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
export default Month;
