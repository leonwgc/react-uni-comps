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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


import React from 'react';
import PropTypes from 'prop-types';
import { getYear } from '@wojtekmaj/date-utils';
import TileGroup from '../TileGroup';
import Month from './Month';
import { tileGroupProps } from '../shared/propTypes';
export default function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return /*#__PURE__*/React.createElement(TileGroup, __assign({}, props, {
    className: "react-calendar__year-view__months",
    dateTransform: function dateTransform(monthIndex) {
      var date = new Date();
      date.setFullYear(year, monthIndex, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "month",
    end: end,
    start: start,
    tile: Month
  }));
}
Months.propTypes = __assign(__assign({}, tileGroupProps), {
  locale: PropTypes.string
});