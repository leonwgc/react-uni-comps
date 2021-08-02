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

import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';

var LazyLoadImage = function LazyLoadImage(_a) {
  var width = _a.width,
      height = _a.height,
      src = _a.src,
      props = __rest(_a, ["width", "height", "src"]);

  var ref = useRef();
  var isInViewport = useInViewport(ref);

  var _b = useState(false),
      ready = _b[0],
      setReady = _b[1];

  var _c = useState(false),
      loaded = _c[0],
      setLoaded = _c[1];

  useEffect(function () {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);

  var style = props.style,
      otherProps = __rest(props, ["style"]);

  var newStyle = !ready || !loaded ? __assign({
    display: 'inline-block',
    filter: "blur(2px)",
    width: width,
    height: height
  }, style) : style;

  var onImageLoaded = function onImageLoaded() {
    setLoaded(true);
  };

  return !ready ? /*#__PURE__*/React.createElement("span", __assign({
    ref: ref,
    style: newStyle
  }, otherProps)) : /*#__PURE__*/React.createElement("img", __assign({
    ref: ref,
    onLoad: onImageLoaded,
    width: width,
    height: height,
    src: src,
    style: newStyle
  }, otherProps));
};

export default LazyLoadImage;