import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Popup from './Popup';
var StyledDrawer = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  position: relative;\n\n  .body {\n    flex: 1;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  position: relative;\n\n  .body {\n    flex: 1;\n  }\n"])));
/** 抽屉 */

var Drawer = function Drawer(props) {
  var className = props.className,
      style = props.style,
      header = props.header,
      children = props.children,
      footer = props.footer,
      _a = props.position,
      position = _a === void 0 ? 'right' : _a,
      rest = __rest(props, ["className", "style", "header", "children", "footer", "position"]);

  var _style = position === 'left' || position === 'right' ? {
    height: '100vh'
  } : {
    width: '100vw'
  };

  return /*#__PURE__*/React.createElement(StyledDrawer, __assign({}, rest, {
    className: clsx('uc-drawer', className),
    style: __assign(__assign({}, _style), style),
    position: position
  }), header && /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, footer));
};

Drawer.displayName = 'UC-Drawer';
export default Drawer;
var templateObject_1;