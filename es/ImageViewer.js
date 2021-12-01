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
import Mask from './Mask';
import Slide from './Slide';
import useCallbackRef from './hooks/useCallbackRef';
import Space from './Space';
import IconArrow from './IconArrow';
import Button from './Button';
import useUpdateEffect from './hooks/useUpdateEffect';
import Icon from './Icon';
import { isMobile } from './dom';
var StyledImageViewer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n\n  .text {\n    position: fixed;\n    left: 50%;\n    top: 12px;\n    transform: translateX(-50%);\n    color: #e6e6e6;\n    font-size: 18px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n  .slide-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n\n    img {\n      object-position: center;\n      max-width: 100%;\n      touch-action: none;\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n\n  .text {\n    position: fixed;\n    left: 50%;\n    top: 12px;\n    transform: translateX(-50%);\n    color: #e6e6e6;\n    font-size: 18px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n  .slide-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n\n    img {\n      object-position: center;\n      max-width: 100%;\n      touch-action: none;\n    }\n  }\n"])));
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
      showDot: false,
      style: {
        zIndex: 101,
        width: '100%'
      },
      direction: "horizontal",
      height: '60vh',
      onPageChange: function onPageChange(index) {
        var _a;

        setIndex(index);
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, index);
      },
      loop: isMobile,
      autoPlay: false
    }, urls.map(function (url) {
      return /*#__PURE__*/React.createElement("div", {
        className: "slide-page",
        key: url
      }, /*#__PURE__*/React.createElement("img", {
        src: url
      }));
    }));
  }, [urls, onIndexChangeRef, slideRef]);

  var textRender = function textRender() {
    if (urls.length > 1) {
      return /*#__PURE__*/React.createElement("div", {
        className: clsx('text')
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
  }), /*#__PURE__*/React.createElement(Mask, {
    style: {
      zIndex: 'auto'
    },
    onClick: onClose
  }), /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-clear",
    onClick: onClose,
    style: {
      position: 'fixed',
      right: 20,
      top: 20,
      cursor: 'pointer',
      fontSize: 30,
      opacity: 0.7
    }
  }), textRender(), slides);
});
ImageViewer.displayName = 'UC-ImageViewer';
export default ImageViewer;
var templateObject_1;