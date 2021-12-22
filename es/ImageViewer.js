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

import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Slide from './Slide';
import useCallbackRef from './hooks/useCallbackRef';
import Space from './Space';
import IconArrow from './IconArrow';
import Button from './Button';
import useUpdateEffect from './hooks/useUpdateEffect';
import Icon from './Icon';
var StyledImageViewer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 300;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: #000;\n\n  .navs {\n    position: absolute;\n    left: 50%;\n    top: 16px;\n    transform: translate3d(-50%, 0, 0);\n    color: #fff;\n    font-size: 18px;\n  }\n  .close {\n    position: fixed;\n    right: 24px;\n    top: 24px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 32px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    max-height: 70vh;\n    object-fit: contain;\n    flex-basis: 100vw;\n  }\n"], ["\n  position: fixed;\n  z-index: 300;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: #000;\n\n  .navs {\n    position: absolute;\n    left: 50%;\n    top: 16px;\n    transform: translate3d(-50%, 0, 0);\n    color: #fff;\n    font-size: 18px;\n  }\n  .close {\n    position: fixed;\n    right: 24px;\n    top: 24px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 32px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    max-height: 70vh;\n    object-fit: contain;\n    flex-basis: 100vw;\n  }\n"])));
/** 图片查看器 */

var ImageViewer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      onClose = props.onClose,
      images = props.images,
      onIndexChange = props.onIndexChange,
      rest = __rest(props, ["className", "visible", "onClose", "images", "onIndexChange"]);

  var _a = useState(Array.isArray(images) ? images : [images]),
      urls = _a[0],
      setUrls = _a[1];

  var _b = useState(0),
      index = _b[0],
      setIndex = _b[1];

  var onIndexChangeRef = useCallbackRef(onIndexChange);
  var slideRef = useRef();
  useEffect(function () {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);
  useUpdateEffect(function () {
    if (!visible) {
      setIndex(0);
    }
  }, [visible]);
  var slides = useMemo(function () {
    return /*#__PURE__*/React.createElement(Slide, {
      ref: slideRef,
      showPageIndicator: false,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      direction: "horizontal",
      height: '100vh',
      onPageChange: function onPageChange(index) {
        var _a;

        setIndex(index);
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, index);
      },
      autoPlay: false
    }, urls.map(function (url) {
      return /*#__PURE__*/React.createElement("img", {
        src: url,
        key: url
      });
    }));
  }, [urls, onIndexChangeRef, slideRef]);

  var navRender = function navRender() {
    if (urls.length > 1) {
      return /*#__PURE__*/React.createElement("div", {
        className: clsx('navs')
      }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
        style: {
          border: 'none'
        },
        ghost: true,
        onClick: function onClick(e) {
          var _a;

          e.stopPropagation();
          (_a = slideRef.current) === null || _a === void 0 ? void 0 : _a.prev();
        },
        icon: /*#__PURE__*/React.createElement(IconArrow, {
          direction: "left"
        })
      }), /*#__PURE__*/React.createElement("span", null, index + 1, " / ", urls.length), /*#__PURE__*/React.createElement(Button, {
        ghost: true,
        style: {
          border: 'none'
        },
        onClick: function onClick(e) {
          var _a;

          e.stopPropagation();
          (_a = slideRef.current) === null || _a === void 0 ? void 0 : _a.next();
        },
        icon: /*#__PURE__*/React.createElement(IconArrow, {
          direction: "right"
        })
      })));
    }
  };

  return visible && /*#__PURE__*/React.createElement(StyledImageViewer, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-image-viewer', className)
  }), slides, /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-clear",
    className: "close",
    onClick: onClose
  }), navRender());
});
ImageViewer.displayName = 'UC-ImageViewer';
export default ImageViewer;
var templateObject_1;