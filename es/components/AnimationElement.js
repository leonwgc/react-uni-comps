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

import React, { useRef } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

var AnimationElement = function AnimationElement(_a) {
  var children = _a.children,
      _b = _a.duration,
      duration = _b === void 0 ? 3000 : _b,
      _c = _a.name,
      name = _c === void 0 ? '' : _c,
      _d = _a.timingFunc,
      timingFunc = _d === void 0 ? 'ease' : _d,
      _e = _a.delay,
      delay = _e === void 0 ? 0 : _e,
      _f = _a.direction,
      direction = _f === void 0 ? 'normal' : _f,
      _g = _a.iterationCount,
      iterationCount = _g === void 0 ? 'infinite' : _g,
      _h = _a.fillMode,
      fillMode = _h === void 0 ? 'none' : _h;
  var ref = useRef();
  var isInViewport = useInViewport(ref);
  var _j = ((children === null || children === void 0 ? void 0 : children.props) || {}).style,
      style = _j === void 0 ? {} : _j;

  var newStyle = __assign(__assign({}, style), {
    animation: duration + "ms " + timingFunc + " " + delay + "ms " + iterationCount + " " + direction + " " + fillMode + " " + (isInViewport ? 'running' : 'paused') + " " + name
  });

  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, /*#__PURE__*/React.cloneElement(children, {
    style: newStyle
  }));
};

export default AnimationElement;