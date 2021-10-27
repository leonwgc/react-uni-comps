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

import React from 'react';

function toPercent(num) {
  return num + "%";
}

export default function Flex(props) {
  var children = props.children,
      className = props.className,
      direction = props.direction,
      count = props.count,
      offset = props.offset,
      style = props.style,
      wrap = props.wrap,
      otherProps = __rest(props, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

  var st = __assign({
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'no-wrap'
  }, style);

  return /*#__PURE__*/React.createElement("div", __assign({
    className: className,
    style: st
  }, otherProps), React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, __assign(__assign({}, child.props), {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
      }
    }));
  }));
}