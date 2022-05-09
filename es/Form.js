function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

import { __assign, __rest } from "tslib";
import React, { useContext } from 'react';
import { Field, default as RcForm } from 'rc-field-form';
import clsx from 'clsx';
import Cell from './Cell';
import Space from './Space';
import Toast from './Toast';
import { isMobile } from './dom';
import { attachPropertiesToComponent } from './util';

var FormItem = function FormItem(props) {
  var requiredMark = (useContext(FormContext) || {}).requiredMark;

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

  return /*#__PURE__*/React.createElement(Cell, {
    withPaddingLeft: false,
    label: label,
    "data-name": name,
    required: requiredMark && required
  }, name ? /*#__PURE__*/React.createElement(Field, __assign({
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
      _d = props.toastError,
      toastError = _d === void 0 ? isMobile : _d,
      _e = props.scrollIntoErrorField,
      scrollIntoErrorField = _e === void 0 ? isMobile : _e,
      rest = __rest(props, ["children", "gap", "requiredMark", "layout", "className", "onFinishFailed", "toastError", "scrollIntoErrorField"]);

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
      requiredMark: requiredMark
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