import { __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import { attachPropertiesToComponent } from './util';
import Space from './Space';
import BallSpin from './BallSpin';
import Spin from './Spin';
var StyledLoading = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n"], ["\n  display: inline-flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n"])));
/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */

var Loading = function Loading() {
  return null;
};
/**
 * @description 显示Loading 提示
 * @param {React.ReactNode} text
 * @param {Config} config
 */


var show = function show(text, config) {
  if (config === void 0) {
    config = {
      type: 'ball',
      gap: 16,
      spinSize: 32
    };
  }

  var _a = config.type,
      type = _a === void 0 ? 'ball' : _a,
      _b = config.gap,
      gap = _b === void 0 ? 16 : _b,
      _c = config.spinSize,
      spinSize = _c === void 0 ? 32 : _c,
      containerStyle = config.containerStyle;
  Toast.show({
    content: /*#__PURE__*/React.createElement(StyledLoading, {
      style: containerStyle
    }, /*#__PURE__*/React.createElement(Space, {
      direction: "vertical",
      size: text ? gap : 0
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: spinSize,
        display: 'inline-flex'
      }
    }, type == 'ball' ? /*#__PURE__*/React.createElement(BallSpin, null) : /*#__PURE__*/React.createElement(Spin, null)), text)),
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
  /** 显示loading */
  show: show,

  /** 隐藏loading */
  hide: hide
});
var templateObject_1;