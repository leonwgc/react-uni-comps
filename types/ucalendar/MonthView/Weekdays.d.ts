/// <reference types="react" />
import PropTypes from 'prop-types';
declare function Weekdays(props: any): JSX.Element;
declare namespace Weekdays {
    var propTypes: {
        calendarType: PropTypes.Validator<string>;
        formatShortWeekday: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<string>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default Weekdays;
