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

import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';
import styled from 'styled-components';
import clsx from 'clsx';
import { isBrowser } from './dom';
var StyleToast = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 12px 16px;\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n"], ["\n  padding: 12px 16px;\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n"])));

var getContainer = function getContainer() {
  if (isBrowser) {
    var div = document.querySelector('.uc-toast-static');

    if (!div) {
      div = document.createElement('div');
      div.className = 'uc-toast-static';
      document.body.appendChild(div);
    }

    return div;
  }

  return null;
};
/** 黑背景提示 */


var Toast = function Toast(props) {
  var content = props.content,
      visible = props.visible,
      modal = props.modal;
  var toastProps = {};

  if (modal) {
    toastProps.mask = true;
    toastProps.maskStyle = {
      opacity: 0
    };
  } else {
    toastProps.mask = false;
  }

  return /*#__PURE__*/React.createElement(StyleToast, __assign({
    position: "center",
    visible: visible,
    className: clsx('uc-toast')
  }, toastProps), content);
};
/** 黑背景提示,静态调用 */


Toast.show = function (content, duration, modal) {
  if (duration === void 0) {
    duration = 2000;
  }

  if (modal === void 0) {
    modal = true;
  }

  if (!content) return;
  var container = getContainer();
  ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
    content: content,
    visible: true,
    modal: modal
  }), container);
  window.setTimeout(function () {
    ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
      content: content,
      visible: false,
      modal: modal
    }), container);
  }, duration);
};

Toast.displayName = 'UC-Toast';
export default Toast;
var templateObject_1;