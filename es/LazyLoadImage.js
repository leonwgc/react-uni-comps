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

import React, { useRef, useState, useImperativeHandle, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { observe, unobserve } from './defaultIntersectionObserver';
var StyledPlaceholder = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"])));
/** 懒加载图片，当做img标签使用, 在视口才加载图片 */

var LazyLoadImage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      src = props.src,
      rest = __rest(props, ["width", "height", "style", "src"]);

  var elRef = useRef();

  var _a = useState(false),
      ready = _a[0],
      setReady = _a[1];

  var _b = useState(false),
      loaded = _b[0],
      setLoaded = _b[1];

  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        setReady(true);
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
  var newStyle = !ready || !loaded ? __assign({
    width: width,
    height: height
  }, style) : style;

  var onImageLoaded = function onImageLoaded() {
    setLoaded(true);
  };

  return !ready ? /*#__PURE__*/React.createElement(StyledPlaceholder, __assign({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React.createElement("img", __assign({}, rest, {
    ref: elRef,
    onLoad: onImageLoaded,
    width: width,
    height: height,
    src: src,
    style: newStyle
  }));
});
LazyLoadImage.displayName = 'UC-LazyLoadImage';
export default LazyLoadImage;
var templateObject_1;