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

import React, { useRef, useImperativeHandle } from 'react';
import useGesture from './hooks/useGesture';
import { supportedGestures } from './hooks/FingerGesture';
import { getProps } from './helper';
/** 手势操作元素 */

var FingerGestureElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a;

  var children = props.children,
      rest = __rest(props, ["children"]);

  var elRef = useRef();
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useGesture(elRef, rest);
  return /*#__PURE__*/React.cloneElement(children, __assign(__assign({}, getProps(rest, supportedGestures, false)), {
    ref: elRef,
    style: __assign(__assign({}, (_a = children === null || children === void 0 ? void 0 : children.props) === null || _a === void 0 ? void 0 : _a.style), {
      touchAction: 'none'
    })
  }));
});
FingerGestureElement.displayName = 'UC-FingerGestureElement';
export default FingerGestureElement;