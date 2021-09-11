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
/** 手势操作元素 */

var FingerGestureElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      rest = __rest(props, ["children"]);

  var elRef = useRef();
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useGesture(elRef, rest);
  return /*#__PURE__*/React.cloneElement(children, {
    ref: elRef
  });
});
FingerGestureElement.displayName = 'UC-FingerGestureElement';
export default FingerGestureElement;