import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { prefixClassName } from './helper';
import clsx from 'clsx';
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n        transform: rotate(0)\n    }\n\n    to {\n        transform: rotate(360deg)\n    }\n"], ["\n    0% {\n        transform: rotate(0)\n    }\n\n    to {\n        transform: rotate(360deg)\n    }\n"])));
var getClassName = prefixClassName('uc-flower-spin');
var StyledLoader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n  position: relative;\n  animation: ", " 0.8s steps(12) infinite;\n\n  .", " {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    &::before {\n      display: block;\n      width: 2px;\n      height: 25%;\n      margin: 0 auto;\n      background-color: currentColor;\n      border-radius: 40%;\n      content: ' ';\n    }\n    &:nth-child(1) {\n      transform: rotate(0deg);\n      opacity: 1;\n    }\n    &:nth-child(2) {\n      transform: rotate(30deg);\n      opacity: ", ";\n    }\n    &:nth-child(3) {\n      transform: rotate(60deg);\n      opacity: ", ";\n    }\n    &:nth-child(4) {\n      transform: rotate(90deg);\n      opacity: ", ";\n    }\n    &:nth-child(5) {\n      transform: rotate(120deg);\n      opacity: ", ";\n    }\n    &:nth-child(6) {\n      transform: rotate(150deg);\n      opacity: ", ";\n    }\n    &:nth-child(7) {\n      transform: rotate(180deg);\n      opacity: ", ";\n    }\n    &:nth-child(8) {\n      transform: rotate(210deg);\n      opacity: ", ";\n    }\n    &:nth-child(9) {\n      transform: rotate(240deg);\n      opacity: ", ";\n    }\n    &:nth-child(10) {\n      transform: rotate(270deg);\n      opacity: ", ";\n    }\n    &:nth-child(11) {\n      transform: rotate(300deg);\n      opacity: ", ";\n    }\n    &:nth-child(12) {\n      transform: rotate(330deg);\n      opacity: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n  position: relative;\n  animation: ", " 0.8s steps(12) infinite;\n\n  .", " {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    &::before {\n      display: block;\n      width: 2px;\n      height: 25%;\n      margin: 0 auto;\n      background-color: currentColor;\n      border-radius: 40%;\n      content: ' ';\n    }\n    &:nth-child(1) {\n      transform: rotate(0deg);\n      opacity: 1;\n    }\n    &:nth-child(2) {\n      transform: rotate(30deg);\n      opacity: ", ";\n    }\n    &:nth-child(3) {\n      transform: rotate(60deg);\n      opacity: ", ";\n    }\n    &:nth-child(4) {\n      transform: rotate(90deg);\n      opacity: ", ";\n    }\n    &:nth-child(5) {\n      transform: rotate(120deg);\n      opacity: ", ";\n    }\n    &:nth-child(6) {\n      transform: rotate(150deg);\n      opacity: ", ";\n    }\n    &:nth-child(7) {\n      transform: rotate(180deg);\n      opacity: ", ";\n    }\n    &:nth-child(8) {\n      transform: rotate(210deg);\n      opacity: ", ";\n    }\n    &:nth-child(9) {\n      transform: rotate(240deg);\n      opacity: ", ";\n    }\n    &:nth-child(10) {\n      transform: rotate(270deg);\n      opacity: ", ";\n    }\n    &:nth-child(11) {\n      transform: rotate(300deg);\n      opacity: ", ";\n    }\n    &:nth-child(12) {\n      transform: rotate(330deg);\n      opacity: ", ";\n    }\n  }\n"])), rotate, getClassName('item'), 1 - 0.75 / 12, 1 - 0.75 / 12 * 2, 1 - 0.75 / 12 * 3, 1 - 0.75 / 12 * 4, 1 - 0.75 / 12 * 5, 1 - 0.75 / 12 * 6, 1 - 0.75 / 12 * 7, 1 - 0.75 / 12 * 8, 1 - 0.75 / 12 * 9, 1 - 0.75 / 12 * 10, 1 - 0.75 / 12 * 11);
var items = new Array(12).fill(0);
/** 菊花spin */

var FlowerSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _a = props.size,
      size = _a === void 0 ? 30 : _a,
      _b = props.color,
      color = _b === void 0 ? 'currentColor' : _b,
      rest = __rest(props, ["className", "style", "size", "color"]);

  return /*#__PURE__*/React.createElement(StyledLoader, __assign({
    style: __assign({
      color: color,
      width: size,
      height: size
    }, style),
    ref: ref
  }, rest, {
    className: clsx(getClassName(), className)
  }), items.map(function (v, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: getClassName('item')
    });
  }));
});
FlowerSpin.displayName = 'UC-FlowerSpin';
export default FlowerSpin;
var templateObject_1, templateObject_2;