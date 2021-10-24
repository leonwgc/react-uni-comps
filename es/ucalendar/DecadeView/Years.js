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
import TileGroup from '../TileGroup';
import Year from './Year';
import { getBeginOfDecadeYear } from '../shared/dates';
import { tileGroupProps } from '../shared/propTypes';
export default function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + 9;
  return /*#__PURE__*/React.createElement(TileGroup, __assign({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      var date = new Date();
      date.setFullYear(year, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "year",
    end: end,
    start: start,
    tile: Year
  }));
}
Years.propTypes = __assign({}, tileGroupProps);