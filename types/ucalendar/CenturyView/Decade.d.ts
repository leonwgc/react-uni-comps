/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Decade({ classes, formatYear, ...otherProps }: {
    [x: string]: any;
    classes: any;
    formatYear?: (locale: any, date: any) => any;
}): JSX.Element;
declare namespace Decade {
    var propTypes: {
        formatYear: PropTypes.Requireable<(...args: any[]) => any>;
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
export default Decade;
