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
import Years from './DecadeView/Years';
export default function DecadeView(props) {
  function renderYears() {
    return /*#__PURE__*/React.createElement(Years, __assign({}, props));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
}