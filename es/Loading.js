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
/* eslint-disable @typescript-eslint/no-empty-function */


import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import Spin from './Spin';
import { attachPropertiesToComponent } from './util';
var StyledLoading = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n\n  .uc-spin {\n    font-size: 42px;\n  }\n"], ["\n  display: inline-flex;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n\n  .uc-spin {\n    font-size: 42px;\n  }\n"])));
/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */

var Loading = function Loading() {
  return null;
};

var show = function show(content) {
  Toast.show({
    content: /*#__PURE__*/React.createElement(StyledLoading, null, content ? content : /*#__PURE__*/React.createElement(Spin, null)),
    duration: 24 * 60 * 60 * 1000
  });
};

var hide = function hide() {
  Toast.hide();
};

export default attachPropertiesToComponent(Loading, {
  show: show,
  hide: hide
});
var templateObject_1;