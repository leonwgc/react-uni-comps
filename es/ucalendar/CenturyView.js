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
import Decades from './CenturyView/Decades';
export default function CenturyView(props) {
  function renderDecades() {
    return /*#__PURE__*/React.createElement(Decades, __assign({}, props));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "century-view"
  }, renderDecades());
}