/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Months(props: any): JSX.Element;
declare namespace Months {
    var propTypes: {
        locale: PropTypes.Requireable<string>;
        activeStartDate: PropTypes.Validator<Date>;
        hover: PropTypes.Requireable<Date>;
        maxDate: (props: any, propName: any, componentName: any) => Error;
        minDate: (props: any, propName: any, componentName: any) => Error;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseOver: PropTypes.Requireable<(...args: any[]) => any>;
        tileClassName: PropTypes.Requireable<string | string[] | ((...args: any[]) => any)>;
        tileContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        value: PropTypes.Requireable<Date | Date[]>;
        valueType: PropTypes.Requireable<string>;
    };
}
export default Months;
