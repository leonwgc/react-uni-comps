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
import Flex from './Flex';
import { getTileClasses } from './shared/utils';
import { tileGroupProps } from './shared/propTypes';
export default function TileGroup(_a) {
  var className = _a.className,
      _b = _a.count,
      count = _b === void 0 ? 3 : _b,
      dateTransform = _a.dateTransform,
      dateType = _a.dateType,
      end = _a.end,
      hover = _a.hover,
      offset = _a.offset,
      start = _a.start,
      _c = _a.step,
      step = _c === void 0 ? 1 : _c,
      Tile = _a.tile,
      value = _a.value,
      valueType = _a.valueType,
      tileProps = __rest(_a, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

  var tiles = [];

  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push( /*#__PURE__*/React.createElement(Tile, __assign({
      key: date.getTime(),
      classes: getTileClasses({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point
    }, tileProps)));
  }

  return /*#__PURE__*/React.createElement(Flex, {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}
TileGroup.propTypes = __assign(__assign({}, tileGroupProps), {
  activeStartDate: PropTypes.instanceOf(Date),
  count: PropTypes.number,
  dateTransform: PropTypes.func.isRequired,
  dateType: PropTypes.string,
  offset: PropTypes.number,
  step: PropTypes.number,
  tile: PropTypes.func.isRequired
});