import { __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import Spin from './Spin';
import { attachPropertiesToComponent } from './util';
import Space from './Space';
var StyledLoading = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 15px;\n\n  .uc-spin {\n    font-size: 32px;\n  }\n"], ["\n  display: inline-flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 15px;\n\n  .uc-spin {\n    font-size: 32px;\n  }\n"])));
/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */

var Loading = function Loading() {
  return null;
};
/**
 * Toast show loading with text
 *
 * @param {React.ReactNode} [text='Loading...']
 * @param {number} [space=16] 内容和spin距离
 */


var show = function show(text, space) {
  if (text === void 0) {
    text = 'Loading...';
  }

  if (space === void 0) {
    space = 16;
  }

  Toast.show({
    content: /*#__PURE__*/React.createElement(StyledLoading, null, /*#__PURE__*/React.createElement(Space, {
      direction: "vertical",
      size: space,
      style: {
        width: 100
      }
    }, /*#__PURE__*/React.createElement(Spin, null), text)),
    duration: 24 * 60 * 60 * 1000,
    style: {
      padding: 0
    }
  });
};

var hide = function hide() {
  Toast.hide();
};

export default attachPropertiesToComponent(Loading, {
  /** show loading with text */
  show: show,

  /** hide loading */
  hide: hide
});
var templateObject_1;