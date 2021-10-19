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

import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Mask from './Mask';
import Slide from './Slide';
import useCallbackRef from './hooks/useCallbackRef';
var StyledImageViewer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n\n  .text {\n    z-index: 101;\n    position: absolute;\n    left: 50%;\n    top: 12px;\n    transform: translateX(-50%);\n    color: #e6e6e6;\n    font-size: 14px;\n  }\n  .slide-page {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n  .image {\n    z-index: 101;\n    width: 100%;\n    max-height: 80vh;\n    object-fit: contain;\n    object-position: center;\n    touch-action: none;\n  }\n"], ["\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n\n  .text {\n    z-index: 101;\n    position: absolute;\n    left: 50%;\n    top: 12px;\n    transform: translateX(-50%);\n    color: #e6e6e6;\n    font-size: 14px;\n  }\n  .slide-page {\n    display: flex;\n    align-items: center;\n    height: 100%;\n  }\n  .image {\n    z-index: 101;\n    width: 100%;\n    max-height: 80vh;\n    object-fit: contain;\n    object-position: center;\n    touch-action: none;\n  }\n"])));
/** 图片查看器 */

var ImageViewer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      maskStyle = props.maskStyle,
      onClose = props.onClose,
      images = props.images,
      onIndexChange = props.onIndexChange,
      rest = __rest(props, ["className", "visible", "maskStyle", "onClose", "images", "onIndexChange"]);

  var _a = useState(Array.isArray(images) ? images : [images]),
      urls = _a[0],
      setUrls = _a[1];

  var _b = useState(0),
      index = _b[0],
      setIndex = _b[1];

  var onIndexChangeRef = useCallbackRef(onIndexChange);
  useEffect(function () {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);
  var slides = useMemo(function () {
    return /*#__PURE__*/React.createElement(Slide, {
      ref: ref,
      showDot: false,
      style: {
        zIndex: 101,
        width: '100%'
      },
      direction: "horizontal",
      height: "60vh",
      onPageChange: function onPageChange(index) {
        var _a;

        setIndex(index);
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, index);
      },
      loop: false,
      autoPlay: false,
      ratio: 0.1
    }, urls.map(function (url) {
      return /*#__PURE__*/React.createElement("div", {
        className: "slide-page",
        key: url
      }, /*#__PURE__*/React.createElement("img", {
        className: "image",
        src: url
      }));
    }));
  }, [urls, onIndexChangeRef, ref]);
  return visible && /*#__PURE__*/React.createElement(StyledImageViewer, __assign({}, rest, {
    className: clsx('uc-image-viewer', className),
    onClick: onClose
  }), /*#__PURE__*/React.createElement(Mask, {
    style: maskStyle
  }), urls.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: clsx('text')
  }, index + 1, " / ", urls.length), urls.length > 1 && slides, urls.length === 1 && /*#__PURE__*/React.createElement("img", {
    className: "image",
    src: urls[0]
  }));
});
ImageViewer.displayName = 'UC-ImageViewer';
export default ImageViewer;
var templateObject_1;