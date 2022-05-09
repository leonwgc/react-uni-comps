import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Icon from './Icon';
import Popup from './Popup';
import { boxShadow } from './vars';
var StyledModal = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-width: 30px;\n  background-color: #fff;\n  padding: 20px;\n  position: relative;\n  border-radius: 8px;\n  box-shadow: ", ";\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .body {\n    flex: 1;\n    padding: 16px 0;\n  }\n\n  .footer {\n    display: flex;\n    justify-content: flex-end;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-width: 30px;\n  background-color: #fff;\n  padding: 20px;\n  position: relative;\n  border-radius: 8px;\n  box-shadow: ", ";\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .body {\n    flex: 1;\n    padding: 16px 0;\n  }\n\n  .footer {\n    display: flex;\n    justify-content: flex-end;\n  }\n"])), boxShadow);
/** 对话框,基于Popup */

var Modal = function Modal(props) {
  var closable = props.closable,
      visible = props.visible,
      onClose = props.onClose,
      className = props.className,
      header = props.header,
      children = props.children,
      footer = props.footer,
      rest = __rest(props, ["closable", "visible", "onClose", "className", "header", "children", "footer"]);

  return /*#__PURE__*/React.createElement(StyledModal, __assign({}, rest, {
    visible: visible,
    onClose: onClose,
    className: clsx('uc-modal', className),
    position: 'center'
  }), closable && /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), header && /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, footer));
};

Modal.displayName = 'UC-Modal';
export default Modal;
var templateObject_1;