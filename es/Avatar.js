import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Icon from './Icon';
var StyledAvatar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-flex;\n  overflow: hidden;\n  color: #666;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  background: #ccc;\n\n  &.circle {\n    border-radius: 50%;\n  }\n  &.square {\n    border-radius: 2px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"], ["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-flex;\n  overflow: hidden;\n  color: #666;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  background: #ccc;\n\n  &.circle {\n    border-radius: 50%;\n  }\n  &.square {\n    border-radius: 2px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])));
/** 头像 */

var Avatar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 40 : _a,
      className = props.className,
      _b = props.shape,
      shape = _b === void 0 ? 'circle' : _b,
      style = props.style,
      children = props.children,
      rest = __rest(props, ["size", "className", "shape", "style", "children"]);

  var s = __assign({
    width: size,
    height: size,
    fontSize: size * 0.6
  }, style);

  return /*#__PURE__*/React.createElement(StyledAvatar, __assign({}, rest, {
    ref: ref,
    style: s,
    className: clsx('uc-avatar', className, shape)
  }), children || /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-avatar"
  }));
});
Avatar.displayName = 'UC-Avatar';
export default Avatar;
var templateObject_1;