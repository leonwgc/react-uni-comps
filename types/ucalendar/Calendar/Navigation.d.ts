import React from 'react';
import PropTypes from 'prop-types';
declare function Navigation({ activeStartDate, drillUp, formatMonthYear, formatYear, locale, maxDate, minDate, navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, setActiveStartDate, showDoubleView, view, views, }: {
    activeStartDate: any;
    drillUp: any;
    formatMonthYear?: (locale: any, date: any) => any;
    formatYear?: (locale: any, date: any) => any;
    locale: any;
    maxDate: any;
    minDate: any;
    navigationAriaLabel?: string;
    navigationAriaLive: any;
    navigationLabel: any;
    next2AriaLabel?: string;
    next2Label?: string;
    nextAriaLabel?: string;
    nextLabel?: string;
    prev2AriaLabel?: string;
    prev2Label?: string;
    prevAriaLabel?: string;
    prevLabel?: string;
    setActiveStartDate: any;
    showDoubleView: any;
    view: any;
    views: any;
}): React.ReactElement;
declare namespace Navigation {
    var propTypes: {
        activeStartDate: PropTypes.Validator<Date>;
        drillUp: PropTypes.Validator<(...args: any[]) => any>;
        formatMonthYear: PropTypes.Requireable<(...args: any[]) => any>;
        formatYear: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<string>;
        maxDate: PropTypes.Requireable<Date>;
        minDate: PropTypes.Requireable<Date>;
        navigationAriaLabel: PropTypes.Requireable<string>;
        navigationAriaLive: PropTypes.Requireable<string>;
        navigationLabel: PropTypes.Requireable<(...args: any[]) => any>;
        next2AriaLabel: PropTypes.Requireable<string>;
        next2Label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        nextAriaLabel: PropTypes.Requireable<string>;
        nextLabel: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        prev2AriaLabel: PropTypes.Requireable<string>;
        prev2Label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        prevAriaLabel: PropTypes.Requireable<string>;
        prevLabel: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        setActiveStartDate: PropTypes.Validator<(...args: any[]) => any>;
        showDoubleView: PropTypes.Requireable<boolean>;
        view: (props: any, propName: any, componentName: any) => Error;
        views: PropTypes.Validator<string[]>;
    };
}
export default Navigation;