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

import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */

var LazyLoadElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      children = props.children,
      rest = __rest(props, ["width", "height", "style", "children"]);

  var elRef = useRef();
  var isInViewport = useInViewport(elRef);

  var _a = useState(false),
      ready = _a[0],
      setReady = _a[1];

  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useEffect(function () {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);
  var newStyle = !ready ? __assign({
    display: 'inline-block',
    width: width,
    height: height
  }, style) : style;
  return !ready ? /*#__PURE__*/React.createElement("span", __assign({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React.cloneElement(children, {
    ref: elRef
  });
});
LazyLoadElement.displayName = 'UC-LazyLoadElement';
export default LazyLoadElement;