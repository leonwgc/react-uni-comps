import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import { attachPropertiesToComponent } from './util';
import Space from './Space';
import BallSpin from './BallSpin';
import Spin from './Spin';
import RoundSpin from './RoundSpin';
import ClockSpin from './ClockSpin';
var StyledLoading = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n"], ["\n  display: inline-flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n"])));
/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */

var Loading = function Loading() {
  return null;
};

var renderSpin = function renderSpin(type, size) {
  switch (type) {
    case 'ball':
      {
        return /*#__PURE__*/React.createElement(BallSpin, null);
      }

    case 'spin':
      {
        return /*#__PURE__*/React.createElement(Spin, null);
      }

    case 'round':
      {
        return /*#__PURE__*/React.createElement(RoundSpin, {
          size: size
        });
      }

    case 'clock':
      {
        return /*#__PURE__*/React.createElement(ClockSpin, {
          size: size
        });
      }
  }
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
      gap: 12,
      spinSize: 32
    };
  }

  var _a = config.type,
      type = _a === void 0 ? 'ball' : _a,
      _b = config.gap,
      gap = _b === void 0 ? 12 : _b,
      _c = config.spinSize,
      spinSize = _c === void 0 ? 32 : _c,
      containerStyle = config.containerStyle;
  var size = text ? 124 : 80;
  Toast.show({
    content: /*#__PURE__*/React.createElement(StyledLoading, null, /*#__PURE__*/React.createElement(Space, {
      direction: "vertical",
      size: text ? gap : 0
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: spinSize,
        display: 'inline-flex'
      }
    }, renderSpin(type, spinSize)), text)),
    duration: 24 * 60 * 60 * 1000,
    style: __assign({
      width: size,
      height: size,
      padding: 0
    }, containerStyle)
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