import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import PopMenu from './PopMenu';
import Icon from './Icon';
import Button from './Button';
var StyledMenu = styled(PopMenu)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 16px;\n\n  .popconfirm-content {\n    min-width: 120px;\n    .title {\n      display: flex;\n      color: #1a1a1a;\n      font-size: 14px;\n      align-items: center;\n      .pop-icon {\n        margin-right: 8px;\n        font-size: 20px;\n        color: #fab20a;\n      }\n    }\n\n    .ops {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 24px;\n\n      button {\n        height: 28px;\n        &:first-child {\n          margin-right: 12px;\n        }\n      }\n    }\n  }\n"], ["\n  padding: 16px;\n\n  .popconfirm-content {\n    min-width: 120px;\n    .title {\n      display: flex;\n      color: #1a1a1a;\n      font-size: 14px;\n      align-items: center;\n      .pop-icon {\n        margin-right: 8px;\n        font-size: 20px;\n        color: #fab20a;\n      }\n    }\n\n    .ops {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 24px;\n\n      button {\n        height: 28px;\n        &:first-child {\n          margin-right: 12px;\n        }\n      }\n    }\n  }\n"])));
/**
 * 点击元素，弹出气泡式的确认框。基于PopMenu
 *
 * target: pc
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */

var PopConfirm = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.placement,
      placement = _a === void 0 ? 'top' : _a,
      _b = props.icon,
      icon = _b === void 0 ? /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-jinggao"
  }) : _b,
      className = props.className,
      children = props.children,
      title = props.title,
      _c = props.okText,
      okText = _c === void 0 ? '确定' : _c,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _d = props.cancelText,
      cancelText = _d === void 0 ? '取消' : _d,
      _e = props.arrow,
      arrow = _e === void 0 ? true : _e,
      onOk = props.onOk,
      _f = props.closeOnClick,
      closeOnClick = _f === void 0 ? true : _f,
      onCancel = props.onCancel,
      popomenuRest = __rest(props, ["placement", "icon", "className", "children", "title", "okText", "okButtonProps", "cancelButtonProps", "cancelText", "arrow", "onOk", "closeOnClick", "onCancel"]);

  var popmenuRef = useRef();
  useImperativeHandle(ref, function () {
    return popmenuRef.current;
  });
  return /*#__PURE__*/React.createElement(StyledMenu, __assign({
    ref: popmenuRef
  }, popomenuRest, {
    className: clsx('uc-popconfirm', className),
    placement: placement,
    arrow: arrow,
    content: /*#__PURE__*/React.createElement("div", {
      className: clsx('popconfirm-content'),
      onClick: function onClick(e) {
        if (!closeOnClick) {
          e.stopPropagation();
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: "pop-icon"
    }, icon), " ", title), /*#__PURE__*/React.createElement("div", {
      className: "ops"
    }, /*#__PURE__*/React.createElement(Button, __assign({}, cancelButtonProps, {
      onClick: function onClick() {
        var _a;

        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        (_a = popmenuRef.current) === null || _a === void 0 ? void 0 : _a.hide();
      }
    }), cancelText), /*#__PURE__*/React.createElement(Button, __assign({
      type: "primary"
    }, okButtonProps, {
      onClick: function onClick(e) {
        if (!closeOnClick) {
          e.stopPropagation(); // prevent popmenu closeOnClick in out wrapper
        }

        onOk === null || onOk === void 0 ? void 0 : onOk();
      }
    }), okText)))
  }), children);
});
PopConfirm.displayName = 'UC-PopConfirm';
export default PopConfirm;
var templateObject_1;