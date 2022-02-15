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
import styled from 'styled-components';
import Toast from './Toast';
import Spin from './Spin';
import { attachPropertiesToComponent } from './util';
import { renderElement } from './dom';
var StyledLoading = styled(Toast)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  line-height: 1.15;\n  border-radius: 4px;\n  min-width: 80px;\n  min-height: 80px;\n  font-size: 16px;\n"], ["\n  display: inline-flex;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  line-height: 1.15;\n  border-radius: 4px;\n  min-width: 80px;\n  min-height: 80px;\n  font-size: 16px;\n"])));
/** 加载Loading */

var Loading = function Loading(_a) {
  var content = _a.content,
      restProps = __rest(_a, ["content"]);

  return /*#__PURE__*/React.createElement(StyledLoading, __assign({
    visible: true
  }, restProps, {
    content: content ? content : /*#__PURE__*/React.createElement(Spin, {
      style: {
        fontSize: 36
      }
    })
  }));
};

var _hide = null;

var show = function show(content) {
  var container = document.createElement('div');
  var dispose = renderElement( /*#__PURE__*/React.createElement(Loading, {
    className: "uc-loading",
    content: content
  }), container);
  _hide === null || _hide === void 0 ? void 0 : _hide();
  _hide = dispose;
};

var hide = function hide() {
  return _hide === null || _hide === void 0 ? void 0 : _hide();
};

attachPropertiesToComponent(Loading, {
  show: show,
  hide: hide
});
export default Loading;
var templateObject_1;