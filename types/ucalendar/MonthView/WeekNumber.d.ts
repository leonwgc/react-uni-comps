/// <reference types="react" />
import PropTypes from 'prop-types';
declare function WeekNumber({ date, onClickWeekNumber, weekNumber }: {
    date: any;
    onClickWeekNumber: any;
    weekNumber: any;
}): JSX.Element;
declare namespace WeekNumber {
    var propTypes: {
        date: PropTypes.Validator<Date>;
        onClickWeekNumber: PropTypes.Requireable<(...args: any[]) => any>;
        weekNumber: PropTypes.Validator<PropTypes.ReactNodeLike>;
    };
}
export default WeekNumber;
