/// <reference types="react" />
import PropTypes from 'prop-types';
declare function WeekNumbers(props: any): JSX.Element;
declare namespace WeekNumbers {
    var propTypes: {
        activeStartDate: PropTypes.Validator<Date>;
        calendarType: PropTypes.Validator<string>;
        onClickWeekNumber: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        showFixedNumberOfWeeks: PropTypes.Requireable<boolean>;
    };
}
export default WeekNumbers;
