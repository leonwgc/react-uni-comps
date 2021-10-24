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
import { getYearStart, getYearEnd } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import { formatYear as defaultFormatYear } from '../shared/dateFormatter';
import { tileProps } from '../shared/propTypes';
var className = 'react-calendar__decade-view__years__year';
export default function Year(_a) {
  var classes = _a.classes,
      _b = _a.formatYear,
      formatYear = _b === void 0 ? defaultFormatYear : _b,
      otherProps = __rest(_a, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: getYearEnd,
    minDateTransform: getYearStart,
    view: "decade"
  }), formatYear(locale, date));
}
Year.propTypes = __assign(__assign({}, tileProps), {
  formatYear: PropTypes.func
});