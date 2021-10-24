/// <reference types="react" />
import PropTypes from 'prop-types';
declare function MonthView(props: any): JSX.Element;
declare namespace MonthView {
    var propTypes: {
        activeStartDate: PropTypes.Validator<Date>;
        calendarType: PropTypes.Requireable<string>;
        formatShortWeekday: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<string>;
        onClickWeekNumber: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        showFixedNumberOfWeeks: PropTypes.Requireable<boolean>;
        showWeekNumbers: PropTypes.Requireable<boolean>;
    };
}
export default MonthView;
