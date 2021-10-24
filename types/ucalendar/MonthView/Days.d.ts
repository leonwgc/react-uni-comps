/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Days(props: any): JSX.Element;
declare namespace Days {
    var propTypes: {
        activeStartDate: PropTypes.Validator<Date>;
        hover: PropTypes.Requireable<Date>;
        locale: PropTypes.Requireable<string>;
        maxDate: (props: any, propName: any, componentName: any) => Error;
        minDate: (props: any, propName: any, componentName: any) => Error;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
        tileClassName: PropTypes.Requireable<string | string[] | ((...args: any[]) => any)>;
        tileContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        value: PropTypes.Requireable<Date | Date[]>;
        valueType: PropTypes.Requireable<string>;
        calendarType: PropTypes.Validator<string>;
        showFixedNumberOfWeeks: PropTypes.Requireable<boolean>;
        showNeighboringMonth: PropTypes.Requireable<boolean>;
    };
}
export default Days;
