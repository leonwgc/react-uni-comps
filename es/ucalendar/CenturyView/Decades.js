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
import { getDecadeStart } from '@wojtekmaj/date-utils';
import TileGroup from '../TileGroup';
import Decade from './Decade';
import { getBeginOfCenturyYear } from '../shared/dates';
export default function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + 99;
  return /*#__PURE__*/React.createElement(TileGroup, __assign({}, props, {
    className: "century-view__decades",
    dateTransform: getDecadeStart,
    dateType: "decade",
    end: end,
    start: start,
    step: 10,
    tile: Decade
  }));
}