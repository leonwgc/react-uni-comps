var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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
import styled from 'styled-components';
import clsx from 'clsx';
var StyledTick = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n"])), function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
});
/** 勾勾 */

var IconTick = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.color,
      color = _a === void 0 ? 'currentColor' : _a,
      className = props.className,
      _b = props.size,
      size = _b === void 0 ? 16 : _b,
      rest = __rest(props, ["color", "className", "size"]);

  return /*#__PURE__*/React.createElement(StyledTick, __assign({}, rest, {
    className: clsx('uc-icon-tick', className),
    ref: ref,
    size: size
  }), /*#__PURE__*/React.createElement("svg", {
    width: size,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.113 1.273a1.085 1.085 0 011.526-.082c.433.386.481 1.041.118 1.485l-.035.04-7.245 8.01a1.083 1.083 0 01-1.474.126l-.047-.039-2.59-2.277A1.076 1.076 0 01.274 7.01a1.085 1.085 0 011.483-.126l.042.035 1.786 1.57 6.528-7.216z",
    fill: color
  })));
});
IconTick.displayName = 'UC-IconTick';
export default IconTick;
var templateObject_1;