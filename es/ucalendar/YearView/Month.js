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
import { getMonthStart, getMonthEnd } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import { formatMonth as defaultFormatMonth, formatMonthYear as defaultFormatMonthYear } from '../shared/dateFormatter';
var className = 'year-view__months__month';
export default function Month(_a) {
  var classes = _a.classes,
      _b = _a.formatMonth,
      formatMonth = _b === void 0 ? defaultFormatMonth : _b,
      _c = _a.formatMonthYear,
      formatMonthYear = _c === void 0 ? defaultFormatMonthYear : _c,
      otherProps = __rest(_a, ["classes", "formatMonth", "formatMonthYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign({}, otherProps, {
    classes: [].concat(classes, className),
    formatAbbr: formatMonthYear,
    maxDateTransform: getMonthEnd,
    minDateTransform: getMonthStart,
    view: "year"
  }), formatMonth(locale, date));
} // Month.propTypes = {
//   ...tileProps,
//   formatMonth: PropTypes.func,
//   formatMonthYear: PropTypes.func,
// };