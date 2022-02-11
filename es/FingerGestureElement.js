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

import React, { useRef, useLayoutEffect } from 'react';
import FingerGesture from './FingerGesture';

var throwCheckError = function throwCheckError() {
  throw new Error('FingerGestureElement: 子元素必须是dom/forwardRef到dom的组件');
};
/** 给子元素添加手势操作 */


var FingerGestureElement = function FingerGestureElement(props) {
  var children = props.children,
      rest = __rest(props, ["children"]);

  var elRef = useRef();
  useLayoutEffect(function () {
    var el = elRef.current;

    if (!(el instanceof HTMLElement)) {
      throwCheckError();
    }

    var fg = new FingerGesture(el, rest);
    return function () {
      var _a;

      (_a = fg.destroy) === null || _a === void 0 ? void 0 : _a.call(fg);
    };
  }, []);

  if (! /*#__PURE__*/React.isValidElement(children)) {
    throwCheckError();
  }

  return /*#__PURE__*/React.cloneElement(children, {
    ref: elRef
  });
};

FingerGestureElement.displayName = 'UC-FingerGestureElement';
export default FingerGestureElement;