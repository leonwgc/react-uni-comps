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
export default function WeekNumber(_a) {
  var date = _a.date,
      onClickWeekNumber = _a.onClickWeekNumber,
      weekNumber = _a.weekNumber;
  var props = {
    className: 'react-calendar__tile',
    style: {
      flexGrow: 1
    }
  };
  var children = /*#__PURE__*/React.createElement("span", null, weekNumber);
  return onClickWeekNumber ? /*#__PURE__*/React.createElement("button", __assign({}, props, {
    onClick: function onClick(event) {
      return onClickWeekNumber(weekNumber, date, event);
    },
    type: "button"
  }), children) : /*#__PURE__*/React.createElement("div", __assign({}, props), children);
}
WeekNumber.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onClickWeekNumber: PropTypes.func,
  weekNumber: PropTypes.node.isRequired
};