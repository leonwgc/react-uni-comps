var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


import React from 'react';
import PropTypes from 'prop-types';
import { getDayStart, getDayEnd } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import { isWeekend } from '../shared/dates';
import { formatDay as defaultFormatDay, formatLongDate as defaultFormatLongDate } from '../shared/dateFormatter';
import { tileProps } from '../shared/propTypes';
var className = 'react-calendar__month-view__days__day';
export default function Day(_a) {
  var _b = _a.formatDay,
      formatDay = _b === void 0 ? defaultFormatDay : _b,
      _c = _a.formatLongDate,
      formatLongDate = _c === void 0 ? defaultFormatLongDate : _c,
      calendarType = _a.calendarType,
      classes = _a.classes,
      currentMonthIndex = _a.currentMonthIndex,
      otherProps = __rest(_a, ["formatDay", "formatLongDate", "calendarType", "classes", "currentMonthIndex"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign({}, otherProps, {
    classes: [].concat(classes, className, isWeekend(date, calendarType) ? className + "--weekend" : null, date.getMonth() !== currentMonthIndex ? className + "--neighboringMonth" : null),
    formatAbbr: formatLongDate,
    maxDateTransform: getDayEnd,
    minDateTransform: getDayStart,
    view: "month"
  }), formatDay(locale, date));
}
Day.propTypes = __assign(__assign({}, tileProps), {
  currentMonthIndex: PropTypes.number.isRequired,
  formatDay: PropTypes.func,
  formatLongDate: PropTypes.func
});