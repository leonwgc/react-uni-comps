function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useContext } from 'react';
import { Field, default as RcForm } from 'rc-field-form';
import clsx from 'clsx';
import Cell from './Cell';
import Space from './Space';
import Toast from './Toast';
import { attachPropertiesToComponent } from './util';
import styled from 'styled-components';
var StyledCell = styled(Cell)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: unset;\n  .cell-inner {\n    padding: 0;\n  }\n"], ["\n  padding-left: unset;\n  .cell-inner {\n    padding: 0;\n  }\n"])));

var FormItem = function FormItem(props) {
  var _a = useContext(FormContext) || {},
      requiredMark = _a.requiredMark,
      cellProps = _a.cellProps;

  var children = props.children,
      label = props.label,
      name = props.name,
      fieldProps = __rest(props, ["children", "label", "name"]);

  var required = false;

  if ('rules' in fieldProps) {
    var rules = fieldProps.rules;

    if (Array.isArray(rules)) {
      required = rules.some(function (rule) {
        if (rule && _typeof(rule) === 'object' && rule.required) {
          return true;
        }

        return false;
      });
    }
  }

  return /*#__PURE__*/React.createElement(StyledCell, __assign({
    label: label,
    "data-name": name,
    required: requiredMark && required
  }, cellProps, {
    lineColor: "transparent"
  }), name ? /*#__PURE__*/React.createElement(Field, __assign({
    name: name
  }, fieldProps), children) : /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, fieldProps) : children);
};

export var FormContext = /*#__PURE__*/React.createContext(null);
/** 表单 */

var Form = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.gap,
      gap = _a === void 0 ? 16 : _a,
      _b = props.requiredMark,
      requiredMark = _b === void 0 ? true : _b,
      _c = props.layout,
      layout = _c === void 0 ? 'vertical' : _c,
      className = props.className,
      _onFinishFailed = props.onFinishFailed,
      toastError = props.toastError,
      scrollIntoErrorField = props.scrollIntoErrorField,
      cellProps = props.cellProps,
      rest = __rest(props, ["children", "gap", "requiredMark", "layout", "className", "onFinishFailed", "toastError", "scrollIntoErrorField", "cellProps"]);

  return /*#__PURE__*/React.createElement(RcForm, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-form', className),
    onFinishFailed: function onFinishFailed(errInfo) {
      if (toastError) {
        Toast.show(errInfo.errorFields[0].errors[0]);
      }

      if (scrollIntoErrorField) {
        var name = errInfo.errorFields[0].name[0];
        var el = document.querySelector("[data-name=".concat(name, "]"));

        if (el instanceof HTMLElement) {
          el === null || el === void 0 ? void 0 : el.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }

      _onFinishFailed === null || _onFinishFailed === void 0 ? void 0 : _onFinishFailed(errInfo);
    }
  }), /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: {
      requiredMark: requiredMark,
      cellProps: cellProps
    }
  }, /*#__PURE__*/React.createElement(Space, {
    direction: layout,
    wrap: true,
    size: gap,
    style: {
      width: '100%'
    }
  }, children)));
});
FormItem.displayName = 'UC-FormItem';
Form.displayName = 'UC-Form';
export default attachPropertiesToComponent(Form, {
  /** 表单项 */
  Item: FormItem
});
var templateObject_1;