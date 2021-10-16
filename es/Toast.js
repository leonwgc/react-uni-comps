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

import React from 'react';
import Popup from './Popup';
import styled from 'styled-components';
import clsx from 'clsx';
import { renderElement } from './dom';
var StyleToast = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 1000;\n  padding: 12px 16px;\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n"], ["\n  z-index: 1000;\n  padding: 12px 16px;\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n"])));
/** 黑背景轻提示 */

var Toast = function Toast(props) {
  var content = props.content,
      visible = props.visible,
      modal = props.modal,
      maskStyle = props.maskStyle,
      className = props.className,
      rest = __rest(props, ["content", "visible", "modal", "maskStyle", "className"]);

  var toastProps = {};

  if (modal) {
    toastProps.mask = true;
    toastProps.maskStyle = __assign({
      opacity: 0,
      zIndex: 500
    }, maskStyle);
  } else {
    toastProps.mask = false;
  }

  return /*#__PURE__*/React.createElement(StyleToast, __assign({}, rest, {
    position: "center",
    visible: visible,
    className: clsx('uc-toast', className)
  }, toastProps), content);
};
/** 黑背景提示,静态调用 */


Toast.show = function (props) {
  var _a = props.duration,
      duration = _a === void 0 ? 2000 : _a,
      rest = __rest(props, ["duration"]);

  var dispose = renderElement( /*#__PURE__*/React.createElement(Toast, __assign({
    modal: true
  }, rest, {
    visible: true
  })));
  window.setTimeout(dispose, duration);
};

Toast.displayName = 'UC-Toast';
export default Toast;
var templateObject_1;